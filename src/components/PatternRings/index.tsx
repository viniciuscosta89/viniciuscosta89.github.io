import { motion } from 'motion/react';

// Wrapped in its own component because Astro can only hydrate a component's
// default/named export, not a member expression like `motion.img`.
function PatternRings({ src }: { src: string }) {
	return (
		<motion.img
			src={src}
			alt=""
			className="relative right-0 z-[-1] -col-start-1 row-start-1 block max-w-[unset] md:right-[-75%]"
			initial={{ opacity: 0, x: 32 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: 'spring' }}
		/>
	);
}

export default PatternRings;
