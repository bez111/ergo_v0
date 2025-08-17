'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, Key, UserX, Globe } from 'lucide-react'

export default function PrivacyUseCasesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Privacy & Confidentiality</h1>
          <p className="text-xl text-gray-400 mb-12">
            Ergo provides advanced privacy features for confidential transactions and data protection
          </p>

          <div className="grid gap-6">
            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader>
                <Shield className="w-8 h-8 text-brand-primary-400 mb-2" />
                <CardTitle>Stealth Addresses</CardTitle>
                <CardDescription>One-time addresses for enhanced privacy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Generate unique addresses for each transaction, making it impossible to link payments to your identity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader>
                <Lock className="w-8 h-8 text-brand-primary-400 mb-2" />
                <CardTitle>Ring Signatures</CardTitle>
                <CardDescription>Obfuscate transaction origins</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Mix your transaction with others to hide the true sender, providing plausible deniability.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader>
                <Eye className="w-8 h-8 text-brand-primary-400 mb-2" />
                <CardTitle>Zero-Knowledge Proofs</CardTitle>
                <CardDescription>Prove without revealing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Verify transactions and smart contracts without exposing sensitive data using Sigma protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader>
                <Key className="w-8 h-8 text-brand-primary-400 mb-2" />
                <CardTitle>ErgoMixer</CardTitle>
                <CardDescription>Non-custodial coin mixing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Break the link between your transactions using a decentralized mixing protocol.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader>
                <UserX className="w-8 h-8 text-brand-primary-400 mb-2" />
                <CardTitle>Anonymous Credentials</CardTitle>
                <CardDescription>Identity without exposure</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Prove attributes about yourself without revealing your actual identity.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-900 border-neutral-800">
              <CardHeader>
                <Globe className="w-8 h-8 text-brand-primary-400 mb-2" />
                <CardTitle>Private Smart Contracts</CardTitle>
                <CardDescription>Confidential business logic</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Execute complex smart contracts while keeping sensitive business data private.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 