"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Mail, MapPin, Phone } from "lucide-react"
import { toast } from "sonner"
import { Spinner } from "@/components/ui/spinner"
import { motion } from "framer-motion"
import { useInView } from "@/hooks/useInView"
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations"

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  details: z.string().min(0, "Please enter at least 10 characters"),
})

type FormValues = z.infer<typeof formSchema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      details: "",
    },
  })

  async function onSubmit(formData: FormValues) {
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });


      if (!res.ok) throw new Error("Failed to send email");

      setSubmitSuccess(true);
      form.reset();
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.div 
      ref={ref}
      className="w-full py-8 sm:py-12 px-4 sm:px-6 lg:px-8"
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <motion.div className="text-center space-y-2" variants={fadeInUp}>
          <h2 className="text-2xl sm:text-3xl font-bold">Contact Me</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Feel free to reach out for collaboration, project inquiries, or just to say hi.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 justify-center items-start">
          {/* Form Section */}
          <motion.div 
            className="lg:col-span-1 order-2 lg:order-1"
            variants={fadeInLeft}
          >
            <Card className="p-4 sm:p-6 lg:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="First Name" {...field} disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input placeholder="Last Name" {...field} disabled={isSubmitting} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email Field */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="email" placeholder="Email" {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone Field */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="tel" placeholder="Phone Number" {...field} disabled={isSubmitting} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Details Field */}
                  <FormField
                    control={form.control}
                    name="details"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Details"
                            {...field}
                            disabled={isSubmitting}
                            className="min-h-[100px]"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-full py-3 sm:py-4"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Spinner className="mr-2" /> Sending...
                      </span>
                    ) : (
                      "Send"
                    )}
                  </Button>

                  {/* Success Message */}
                  {submitSuccess && (
                    toast.success("Message sent successfully!")
                  )}
                </form>
              </Form>
            </Card>
          </motion.div>

          {/* Contact Info Section */}
          <motion.div 
            className="lg:col-span-1 order-1 lg:order-2 space-y-4 sm:space-y-6"
            variants={fadeInRight}
          >
            {/* Email */}
            <motion.div 
              className="flex gap-3 sm:gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Email me</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">I will contact you as soon as possible.</p>
                <p className="text-xs sm:text-sm font-medium text-foreground break-all">nguyentrung060503@gmail.com</p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div 
              className="flex gap-3 sm:gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Call me</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">Mon-Fri from 8am to 5pm.</p>
                <p className="text-xs sm:text-sm font-medium text-foreground">(+84) 985457665</p>
              </div>
            </motion.div>
            
            {/* Address */}
            <motion.div 
              className="flex gap-3 sm:gap-4"
              variants={fadeInUp}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground mt-1" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">My address</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">I am here to introduce myself and answer questions.</p>
                <p className="text-xs sm:text-sm font-medium text-foreground">Tay Thanh - Tan Phu - TP. Ho Chi Minh</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
