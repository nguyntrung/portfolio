"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface LightboxProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
}

export function Lightbox({ isOpen, onClose, src, alt }: LightboxProps) {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content 
              asChild 
              onPointerDownOutside={onClose}
            >
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Overlay to handle clicks outside the image */}
                <div 
                  className="absolute inset-0" 
                  onClick={onClose}
                />
                
                {/* Image container - stopPropagation to prevent closing when clicking on the image */}
                <div 
                  className="relative max-w-full max-h-full overflow-hidden rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                    <Image
                      src={src}
                      alt={alt}
                      className="object-contain max-h-[80vh] w-auto h-auto"
                      width={1200}
                      height={800}
                      priority
                    />
                  </div>
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 rounded-full p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  )
}