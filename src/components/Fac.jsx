'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Fac() {
  const fullBleedStyle = {
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    width: '100vw',
    backgroundColor: '#ffffff',
    overflowX: 'hidden',
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <section aria-label="Meet section" style={fullBleedStyle}>
      {/* --- SECTION 1 --- */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Image (fade in left) */}
        <motion.div
          className="relative w-full h-[420px] overflow-hidden rounded-2xl group"
          initial="hidden"
          animate="visible"
          variants={fadeLeft}
        >
          <Image
            src="/msp1.png"
            alt="Meet our expert"
            fill
            className="object-cover rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-108"
            priority
          />
        </motion.div>

        {/* Text (fade in after image) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 1, ease: 'easeOut' },
            },
          }}
        >
          {/* <h2 className="text-4xl md:text-5xl font-serif text-[#1e2b27] mb-5">
            Meet Our Specialists
          </h2> */}
          {/* <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p> */}
          {/* Button */}
          {/* <button className="px-6 py-3 rounded-full bg-[#f2d89c] text-[#1e2b27] font-serif font-medium hover:bg-[#eacb83] transition-colors duration-300">
            Let’s Talk
          </button> */}
        </motion.div>
      </div>  

      {/* --- SECTION 2 --- */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 pb-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Text (fade in before image) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: 'easeOut' },
            },
          }}
        >
          {/* <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
            Our Mission
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1e2b27] mb-5">
            Building wellness for everyone
          </h2> */}
          {/* <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Join us in creating a healthier, happier world.
          </p> */}
          {/* Button */}
          {/* <button className="px-6 py-3 rounded-full bg-[#f2d89c] text-[#1e2b27] font-serif font-medium hover:bg-[#eacb83] transition-colors duration-300">
            More About Us
          </button> */}
        </motion.div>

        {/* Image (fade in right) */}
        <motion.div
          className="relative w-full h-[420px] overflow-hidden rounded-2xl group"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 1, ease: 'easeOut' },
            },
          }}
        >
          <Image
            src="/msp2.png"
            alt="Mental wellness session"
            fill
            className="object-cover rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-108"
            priority
          />
        </motion.div>
      </div>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Image (fade in left) */}
        <motion.div
          className="relative w-full h-[420px] overflow-hidden rounded-2xl group"
          initial="hidden"
          animate="visible"
          variants={fadeLeft}
        >
          <Image
            src="/msp1.png"
            alt="Meet our expert"
            fill
            className="object-cover rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-108"
            priority
          />
        </motion.div>

        {/* Text (fade in after image) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 1, ease: 'easeOut' },
            },
          }}
        >
          {/* <h2 className="text-4xl md:text-5xl font-serif text-[#1e2b27] mb-5">
            Meet Our Specialists
          </h2> */}
          {/* <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p> */}
          {/* Button */}
          {/* <button className="px-6 py-3 rounded-full bg-[#f2d89c] text-[#1e2b27] font-serif font-medium hover:bg-[#eacb83] transition-colors duration-300">
            Let’s Talk
          </button> */}
        </motion.div>
      </div>  

      {/* --- SECTION 2 --- */}
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 pb-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Text (fade in before image) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, ease: 'easeOut' },
            },
          }}
        >
          {/* <p className="text-sm uppercase tracking-wider text-gray-500 mb-3">
            Our Mission
          </p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#1e2b27] mb-5">
            Building wellness for everyone
          </h2> */}
          {/* <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            Join us in creating a healthier, happier world.
          </p> */}
          {/* Button */}
          {/* <button className="px-6 py-3 rounded-full bg-[#f2d89c] text-[#1e2b27] font-serif font-medium hover:bg-[#eacb83] transition-colors duration-300">
            More About Us
          </button> */}
        </motion.div>

        {/* Image (fade in right) */}
        <motion.div
          className="relative w-full h-[420px] overflow-hidden rounded-2xl group"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1, delay: 1, ease: 'easeOut' },
            },
          }}
        >
          <Image
            src="/msp2.png"
            alt="Mental wellness session"
            fill
            className="object-cover rounded-2xl transform transition-transform duration-500 ease-in-out group-hover:scale-108"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
