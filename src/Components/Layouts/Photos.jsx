import React from 'react';
import { motion } from 'framer-motion';
import photo1 from './homePhotos/photo1.webp'
import photo2 from './homePhotos/photo2.webp'
import photo3 from './homePhotos/photo3.webp'
import photo4 from './homePhotos/photo4.webp'
import photo5 from './homePhotos/photo5.webp'
import photo6 from './homePhotos/photo6.webp'
import photo7 from './homePhotos/photo7.webp'
import photo8 from './homePhotos/photo8.webp'
import photo9 from './homePhotos/photo9.webp'
import photo10 from './homePhotos/photo10.webp'
import photo11 from './homePhotos/photo11.webp'


function Photos() {
  return (
    <div>
      {/* Section 1 */}
      <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-gray-50">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-1 flex-col gap-2">
            <motion.div
              className="flex flex-1 flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* img_01 */}
              <img
                className="object-cover h-full"
                src={photo1}
                alt="img_01"
              />
            </motion.div>
            <motion.div
              className="hidden md:flex flex-1 flex-row gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex flex-1 flex-col">
                {/* img_02 */}
                <img
                  className="object-cover h-full"
                  src={photo9}
                  alt="img_02"
                />
              </div>
              <div className="hidden md:flex flex-1 flex-col">
                {/* img_03 */}
                <img
                  className="object-cover h-full"
                  src={photo3}
                />
              </div>
            </motion.div>
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <motion.div
              className="hidden md:flex flex-1 flex-row gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="flex flex-1 flex-col">
                {/* img_04 */}
                <img
                  className="object-cover h-full"
                  src={photo4}
                  alt="img_04"
                />
              </div>
              <div className="hidden md:flex flex-1 flex-col">
                {/* img_05 */}
                <img
                  className="object-cover h-full"
                  src={photo5}
                  alt="img_05"
                />
              </div>
            </motion.div>
            <motion.div
              className="flex flex-1 flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {/* img_06 */}
              <img
                className="object-cover h-full"
                src={photo6}
                alt="img_06"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="max-w-screen-2xl mx-auto px-4 py-16 lg:py-24 relative bg-white">
        <div className="flex flex-col md:flex-row gap-2">
          <div className="flex flex-1 flex-col">
            <motion.div
              className="flex flex-1 flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {/* img_01 */}
              <img
                className="object-cover h-full"
                src={photo7}
                alt="img_07"
              />
            </motion.div>
          </div>
          <div className="flex flex-1">
            <motion.div
              className="grid grid-cols-2 gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div>
                {/* img_02 */}
                <img
                  className="object-cover h-full"
                  src={photo8}
                  alt="img_08"
                />
              </div>
              <div>
                {/* img_03 */}
                <img
                  className="object-cover h-full"
                  src={photo11}
                  alt="img_09"
                />
              </div>
              <div>
                {/* img_04 */}
                <img
                  className="object-cover h-full"
                  src={photo2}
                  alt="img_10"
                />
              </div>
              <div>
                {/* img_05 */}
                <img
                  className="object-cover h-full"
                  src={photo10}
                  alt="img_11"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Photos;
