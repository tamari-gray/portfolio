import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, C as space, B as element, t as text, D as claim_space, b as claim_element, e as children, f as claim_text, g as detach_dev, o as attr_dev, h as add_location, j as insert_dev, k as append_dev, n as noop } from './index.b04f6f84.js';

/* src/routes/index.svelte generated by Svelte v3.12.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	var t0, div, h1, t1, span, t2, t3, h3, t4;

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			h1 = element("h1");
			t1 = text("Im a\n    ");
			span = element("span");
			t2 = text("full stack developer");
			t3 = space();
			h3 = element("h3");
			t4 = text("- making cool stuff is fun :)");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_space(nodes);

			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			h1 = claim_element(div_nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, "Im a\n    ");

			span = claim_element(h1_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t2 = claim_text(span_nodes, "full stack developer");
			span_nodes.forEach(detach_dev);
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(div_nodes);

			h3 = claim_element(div_nodes, "H3", { class: true }, false);
			var h3_nodes = children(h3);

			t4 = claim_text(h3_nodes, "- making cool stuff is fun :)");
			h3_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			document.title = "Tamari gray";
			attr_dev(span, "class", "svelte-1hb4n48");
			add_location(span, file, 40, 4, 520);
			attr_dev(h1, "class", "svelte-1hb4n48");
			add_location(h1, file, 38, 2, 502);
			attr_dev(h3, "class", "svelte-1hb4n48");
			add_location(h3, file, 42, 2, 564);
			attr_dev(div, "class", "hero svelte-1hb4n48");
			add_location(div, file, 36, 0, 480);
		},

		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t1);
			append_dev(h1, span);
			append_dev(span, t2);
			append_dev(div, t3);
			append_dev(div, h3);
			append_dev(h3, t4);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(t0);
				detach_dev(div);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Index", options, id: create_fragment.name });
	}
}

export default Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYzc0OWUwNjQuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
