let test = require('tape');
let d3X3dom = require("../../");

test("Test Crosshair Component, component.crosshair()", function(t) {
	let crosshair = d3X3dom.component.crosshair();

	// Test dimensions getter / setter function
	t.deepEqual(crosshair.dimensions(), { x: 40, y: 40, z: 40 }, "Default dimensions");
	crosshair.dimensions({ x: 10, y: 20, z: 30 });
	t.deepEqual(crosshair.dimensions(), { x: 10, y: 20, z: 30 }, "Changed dimensions");

	// Test xScale getter / setter function
	t.deepEqual(crosshair.xScale(), undefined, "Default xScale is undefined");
	crosshair.xScale(5);
	t.deepEqual(crosshair.xScale(), 5, "Changed xScale is set");

	// Test yScale getter / setter function
	t.deepEqual(crosshair.yScale(), undefined, "Default yScale is undefined");
	crosshair.yScale(5);
	t.deepEqual(crosshair.yScale(), 5, "Changed yScale is set");

	// Test zScale getter / setter function
	t.deepEqual(crosshair.zScale(), undefined, "Default zScale is undefined");
	crosshair.zScale(5);
	t.deepEqual(crosshair.zScale(), 5, "Changed zScale is set");

	// Test colors getter / setter function
	t.deepEqual(crosshair.colors(), ["blue", "red", "green"], "Default colors");
	crosshair.colors(["orange", "cyan", "magenta"]);
	t.deepEqual(crosshair.colors(), ["orange", "cyan", "magenta"], "Changed colors");

	t.end();
});
