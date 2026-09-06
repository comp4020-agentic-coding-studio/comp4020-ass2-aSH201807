import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

// The three digits this repo was provisioned with (src/course-config.ts),
// which the assignment 2 spec says must survive any change to the level digit.
const PROVISIONED_CODE_SUFFIX = "439";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const nodesOfType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("assignment 2 spec", () => {
  it("keeps the course code's provisioned three digits", () => {
    expect(api.course.code.slice(-3)).toBe(PROVISIONED_CODE_SUFFIX);
  });

  it("runs across twelve dated teaching weeks, one session each", () => {
    const weeks = nodesOfType("sessions")
      .map((node) => node.meta?.week)
      .sort((a, b) => (a as number) - (b as number));
    expect(weeks).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("has at least one lecture linking to a deck that actually builds", () => {
    const slides = nodesOfType("lectures")
      .map((node) => node.meta?.slides)
      .filter((slide): slide is string => typeof slide === "string" && slide.length > 0);
    expect(slides.length, "no lecture names a deck in its `slides` field").toBeGreaterThan(0);
    for (const slide of slides) {
      const deckPage = resolve("dist", slide.replace(/^\//, ""), "index.html");
      expect(existsSync(deckPage), `${slide} has no built page at ${deckPage}`).toBe(true);
    }
  });

  it("sums assessment weights to 100", () => {
    const total = nodesOfType("assessments").reduce(
      (sum, node) => sum + (Number(node.meta?.weight) || 0),
      0,
    );
    expect(total).toBe(100);
  });
});
