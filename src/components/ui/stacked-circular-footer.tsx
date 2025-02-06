'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import { useState, FormEvent } from "react"

function StackedCircularFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Here you would typically send the email to your server or email service
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-background py-20" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 w-full bg-card rounded-3xl p-8 border border-border">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-6">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4 items-center justify-center md:justify-start">
                  <Link href="/unavailable">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </Link>
                  <Link href="/unavailable">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">Github</span>
                    </Button>
                  </Link>
                  <Link href="/unavailable">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </Link>
                  <Link href="/unavailable">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">
                      Name
                    </Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="mt-2"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="Your email" 
                      className="mt-2"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium">
                    Message
                  </Label>
                  <textarea 
                    id="message"
                    placeholder="Your message"
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-2 min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full rounded-xl bg-zinc-100 hover:bg-zinc-200 text-black transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </Button>
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 border rounded-xl bg-background/50">
                    <p className="text-sm text-primary flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Thanks! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 p-3 border rounded-xl bg-background/50">
                    <p className="text-sm text-destructive flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} Made with WebFlow Drag and Drop by Jeiwinfrey.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
