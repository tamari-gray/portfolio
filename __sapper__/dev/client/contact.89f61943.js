import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, B as element, t as text, b as claim_element, e as children, f as claim_text, g as detach_dev, h as add_location, j as insert_dev, k as append_dev, n as noop } from './index.b04f6f84.js';

/* src/routes/contact.svelte generated by Svelte v3.12.1 */

const file = "src/routes/contact.svelte";

function create_fragment(ctx) {
	var h1, t;

	const block = {
		c: function create() {
			h1 = element("h1");
			t = text("contact page");
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t = claim_text(h1_nodes, "contact page");
			h1_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			add_location(h1, file, 0, 0, 0);
		},

		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(h1);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

class Contact extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Contact", options, id: create_fragment.name });
	}
}

export default Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC44OWY2MTk0My5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=