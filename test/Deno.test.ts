import {assert, assertEquals} from "https://deno.land/std@0.60.0/testing/asserts.ts";

Deno.test("Test Assert", () => {
	const x = 1 + 2
	assertEquals(x, 3);
});
