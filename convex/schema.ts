import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	todos: defineTable({
		title: v.string(),
		description: v.optional(v.string()),
		dueDate: v.optional(v.number()), // epoch ms
		completed: v.boolean(),
		order: v.number() // for manual sort
	}).index("by_order", ["order"]).index("by_completed", ["completed"]),
});

