import { Suspense } from "react"
import RegisterPageClient from "./RegisterPageClient"

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading registration page...</div>}>
      <RegisterPageClient initialTab="enquiry" />
    </Suspense>
  )
}
