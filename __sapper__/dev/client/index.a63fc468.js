import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, h as claim_space, c as claim_element, b as children, g as detach_dev, f as claim_text, j as attr_dev, l as add_location, m as insert_dev, o as append_dev, n as noop } from './index.a1dc0257.js';

/* src/routes/index.svelte generated by Svelte v3.12.1 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	var t0, div, t1, h1, t2, span, t3, t4, h3, t5;

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			t1 = space();
			h1 = element("h1");
			t2 = text("Im a ");
			span = element("span");
			t3 = text("full stack developer");
			t4 = space();
			h3 = element("h3");
			t5 = text("-making cool stuff is fun");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_space(nodes);

			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			div_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);

			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t2 = claim_text(h1_nodes, "Im a ");

			span = claim_element(h1_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t3 = claim_text(span_nodes, "full stack developer");
			span_nodes.forEach(detach_dev);
			h1_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);

			h3 = claim_element(nodes, "H3", {}, false);
			var h3_nodes = children(h3);

			t5 = claim_text(h3_nodes, "-making cool stuff is fun");
			h3_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			document.title = "Tamari gray";
			attr_dev(div, "class", "hero");
			add_location(div, file, 27, 0, 282);
			attr_dev(span, "class", "svelte-1udwn5j");
			add_location(span, file, 30, 9, 318);
			attr_dev(h1, "class", "svelte-1udwn5j");
			add_location(h1, file, 30, 0, 309);
			add_location(h3, file, 31, 0, 358);
		},

		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t2);
			append_dev(h1, span);
			append_dev(span, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, h3, anchor);
			append_dev(h3, t5);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(t0);
				detach_dev(div);
				detach_dev(t1);
				detach_dev(h1);
				detach_dev(t4);
				detach_dev(h3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTYzZmM0NjguanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
