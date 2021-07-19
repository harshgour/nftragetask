module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false,
	theme: {
		extend: {
			borderWidth: {
				1: "1px",
			},
			colors: {
				blue: {
					topper: "#173F5F",
				},
			},
			screens: {
				duo: { min: "540px", max: "640px" },
			},
		},
	},
	variants: { extend: {} },
	plugins: [],
};
