import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listTodos = query({
	args: { search: v.optional(v.string()), filter: v.optional(v.string()) },
	handler: async (ctx, args) => {
		const q = (args.search || "").toLowerCase();
		let rows = await ctx.db.query("todos").withIndex("by_order").collect();
		if (q) rows = rows.filter(t => t.title.toLowerCase().includes(q));
		if (args.filter === "active") rows = rows.filter(t => !t.completed);
		if (args.filter === "completed") rows = rows.filter(t => t.completed);
		return rows;
	},
});

export const createTodo = mutation({
	args: {
		title: v.string(),
		description: v.optional(v.string()),
		dueDate: v.optional(v.number()),
	},
	handler: async (ctx, { title, description, dueDate }) => {
		const maxOrder = await ctx.db
			.query("todos")
			.withIndex("by_order")
			.order("desc")
			.first();
		const nextOrder = (maxOrder?.order || 0) + 1;
		const id = await ctx.db.insert("todos", {
			title,
			description,
			dueDate,
			completed: false,
			order: nextOrder,
		});
		return id;
	},
});

export const updateTodo = mutation({
	args: {
		id: v.id("todos"),
		title: v.optional(v.string()),
		description: v.optional(v.string()),
		dueDate: v.optional(v.number()),
		completed: v.optional(v.boolean()),
	},
	handler: async (ctx, { id, ...rest }) => {
		const existing = await ctx.db.get(id);
		if (!existing) throw new Error("Todo not found");
		await ctx.db.patch(id, rest);
	},
});

export const deleteTodo = mutation({
	args: { id: v.id("todos") },
	handler: async (ctx, { id }) => {
		await ctx.db.delete(id);
	},
});

export const reorder = mutation({
	args: { orderedIds: v.array(v.id("todos")) },
	handler: async (ctx, { orderedIds }) => {
		for (let i = 0; i < orderedIds.length; i++) {
			await ctx.db.patch(orderedIds[i], { order: i + 1 });
		}
	},
});

