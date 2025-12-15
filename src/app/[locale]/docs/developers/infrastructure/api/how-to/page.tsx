"use client";

/* eslint-disable react/no-unescaped-entities */

import React from "react";
import { Link } from "@/i18n/navigation";
import { 
  Code, 
  ChevronRight,
  BookOpen,
  Key,
  TestTube,
  Database,
  Settings,
  Users,
  AlertCircle,
  RefreshCw,
  ExternalLink
} from "lucide-react";

export default function APIHowToPage() {
  return (
    <div className="text-white">
      {/* Hero Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
          How to Use the APIs
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          A comprehensive guide for beginners to get started with Ergo's APIs.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/docs/developers/infrastructure/api"
            className="inline-flex items-center px-6 py-3 bg-pink-500 rounded-xl font-semibold text-black hover:bg-pink-600 transition-transform hover:scale-105"
          >
            <ChevronRight className="w-5 h-5 mr-2" /> Back to APIs
          </Link>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center">
          <BookOpen className="w-6 h-6 mr-3" />
          For Beginners
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            If you are new to using APIs and want to get started with Ergo's APIs, here are some steps to help you get going. 
            APIs are powerful tools that allow you to interact with the Ergo blockchain and incorporate its features into your applications.
          </p>
          <p className="text-gray-300">
            Take your time to understand the API functionalities, experiment with different endpoints, and gradually build your integration 
            to harness the full potential of Ergo's APIs.
          </p>
        </div>
      </div>

      {/* Step-by-Step Guide */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-400 mb-6 flex items-center">
          <Code className="w-6 h-6 mr-3" />
          Step-by-Step Guide
        </h2>
        
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Choose an API</h3>
                <p className="text-gray-300 mb-3">
                  Determine which Ergo API suits your needs. Consider the specific functionalities and data you require for your application or project.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-purple-400 mb-2">Consider these factors:</h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li>What type of data do you need? (blockchain info, transactions, tokens, etc.)</li>
                    <li>Do you need real-time data or historical data?</li>
                    <li>What's your use case? (dApp, trading bot, analytics, etc.)</li>
                    <li>Do you need authentication or is public access sufficient?</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Read the Documentation</h3>
                <p className="text-gray-300 mb-3">
                  Visit the API documentation for the chosen API. The documentation provides detailed information on the available endpoints, 
                  parameters, and response formats. Familiarize yourself with the API's capabilities and explore any example calls provided.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-purple-400 mb-2">Key documentation sections to review:</h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li>Authentication methods and requirements</li>
                    <li>Available endpoints and their purposes</li>
                    <li>Request/response formats and examples</li>
                    <li>Rate limits and usage guidelines</li>
                    <li>Error codes and troubleshooting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Understand the Endpoints</h3>
                <p className="text-gray-300 mb-3">
                  Review the list of available endpoints and their purposes. Each endpoint serves a specific function and allows you to 
                  retrieve or interact with different data or services.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-purple-400 mb-2">Common endpoint types:</h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li><strong>GET</strong> - Retrieve data (blocks, transactions, addresses)</li>
                    <li><strong>POST</strong> - Submit data (transactions, queries)</li>
                    <li><strong>PUT</strong> - Update existing data</li>
                    <li><strong>DELETE</strong> - Remove data (rare in blockchain APIs)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-300 mb-2 flex items-center">
                  <Key className="w-5 h-5 mr-2" />
                  Authenticate (If Required)
                </h3>
                <p className="text-gray-300 mb-3">
                  Some APIs may require authentication to access certain endpoints or perform specific actions. Refer to the API documentation 
                  to understand the authentication mechanisms and requirements. Obtain any necessary credentials or tokens to authenticate your requests.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-purple-400 mb-2">Common authentication methods:</h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li><strong>API Keys</strong> - Simple token-based authentication</li>
                    <li><strong>OAuth 2.0</strong> - More secure token-based authentication</li>
                    <li><strong>JWT Tokens</strong> - JSON Web Tokens for stateless auth</li>
                    <li><strong>Basic Auth</strong> - Username/password authentication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                5
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-300 mb-2 flex items-center">
                  <TestTube className="w-5 h-5 mr-2" />
                  Test Endpoints
                </h3>
                <p className="text-gray-300 mb-3">
                  Use an API testing tool like Postman or cURL to send requests to the API endpoints. Start with simple requests to retrieve 
                  basic data, such as blockchain information or transaction details. Verify that you receive the expected responses.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-purple-400 mb-2">Recommended testing tools:</h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li><strong>Postman</strong> - GUI-based API testing tool</li>
                    <li><strong>cURL</strong> - Command-line tool for API requests</li>
                    <li><strong>Insomnia</strong> - Alternative to Postman</li>
                    <li><strong>Browser DevTools</strong> - For web-based APIs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                6
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-300 mb-2 flex items-center">
                  <Database className="w-5 h-5 mr-2" />
                  Explore Data Retrieval
                </h3>
                <p className="text-gray-300 mb-3">
                  Experiment with different endpoints to retrieve the data you need. For example, if you want to retrieve address-specific data, 
                  use the appropriate endpoint and provide the required parameters, such as the address. Study the response structure and extract 
                  the relevant information for your application.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-purple-400 mb-2">Example queries to try:</h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li>Get latest block information</li>
                    <li>Retrieve transaction details by ID</li>
                    <li>Fetch address balance and transaction history</li>
                    <li>Query token information and metadata</li>
                    <li>Get mempool status and pending transactions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                7
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-300 mb-2 flex items-center">
                  <Settings className="w-5 h-5 mr-2" />
                  Integrate into Your Application
                </h3>
                <p className="text-gray-300 mb-3">
                  Once you are comfortable with retrieving data, integrate the API calls into your application or project. Use the retrieved 
                  data to power your application's features or display blockchain information to users.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-purple-400 mb-2">Integration best practices:</h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li>Use appropriate HTTP libraries for your programming language</li>
                    <li>Implement proper error handling and retry logic</li>
                    <li>Cache responses when appropriate to reduce API calls</li>
                    <li>Follow rate limiting guidelines</li>
                    <li>Use environment variables for API keys and endpoints</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 8 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                8
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-300 mb-2 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Handle Errors
                </h3>
                <p className="text-gray-300 mb-3">
                  Be prepared to handle potential errors or exceptions that may occur during API interactions. Refer to the API documentation 
                  to understand the possible error responses and implement appropriate error handling in your code.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-purple-400 mb-2">Common error scenarios:</h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li><strong>400 Bad Request</strong> - Invalid parameters or malformed request</li>
                    <li><strong>401 Unauthorized</strong> - Missing or invalid authentication</li>
                    <li><strong>403 Forbidden</strong> - Insufficient permissions</li>
                    <li><strong>404 Not Found</strong> - Resource doesn't exist</li>
                    <li><strong>429 Too Many Requests</strong> - Rate limit exceeded</li>
                    <li><strong>500 Internal Server Error</strong> - Server-side issues</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 9 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                9
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-300 mb-2 flex items-center">
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Stay Updated
                </h3>
                <p className="text-gray-300 mb-3">
                  Keep an eye on the API documentation and any announcements or updates related to the Ergo APIs. APIs may evolve over time, 
                  and new functionalities or improvements could be introduced. Stay informed to leverage the latest capabilities.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-purple-400 mb-2">Stay informed through:</h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li>Official API documentation and changelogs</li>
                    <li>Ergo community forums and Discord</li>
                    <li>GitHub repositories for API projects</li>
                    <li>Developer newsletters and announcements</li>
                    <li>API status pages and monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 10 */}
          <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
            <div className="flex items-start">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                10
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-300 mb-2 flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Seek Community Support
                </h3>
                <p className="text-gray-300 mb-3">
                  If you encounter any difficulties or have questions while using the APIs, reach out to the Ergo community for support. 
                  Join forums, chat groups, or developer communities where you can connect with other developers working with Ergo. 
                  Sharing knowledge and experiences can be helpful in resolving any challenges you may face.
                </p>
                <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
                  <h4 className="text-md font-semibold text-purple-400 mb-2">Community resources:</h4>
                  <ul className="list-disc ml-6 text-gray-300 space-y-1">
                    <li><a href="https://discord.gg/ergo" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ergo Discord <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                    <li><a href="https://t.me/ergo_platform" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ergo Telegram <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                    <li><a href="https://github.com/ergoplatform" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ergo GitHub <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                    <li><a href="https://ergoplatform.org/en/blog/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Ergo Blog <ExternalLink className="inline w-4 h-4 ml-1" /></a></li>
                    <li>Stack Overflow with #ergo tag</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Start Example */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-orange-400 mb-6 flex items-center">
          <Code className="w-6 h-6 mr-3" />
          Quick Start Example
        </h2>
        <div className="bg-neutral-900/50 border border-neutral-700 rounded-xl p-6">
          <p className="text-gray-300 mb-4">
            Here's a simple example of how to make your first API call using cURL:
          </p>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4">
            <h4 className="text-md font-semibold text-purple-400 mb-2">Get latest block information:</h4>
            <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`curl -X GET "https://api.ergoplatform.com/api/v1/blocks?limit=1" \\
  -H "Content-Type: application/json"`}
            </pre>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-600 rounded-lg p-4 mt-4">
            <h4 className="text-md font-semibold text-purple-400 mb-2">Get transaction by ID:</h4>
            <pre className="text-green-400 text-sm bg-neutral-900 p-3 rounded overflow-x-auto">
{`curl -X GET "https://api.ergoplatform.com/api/v1/transactions/{transaction_id}" \\
  -H "Content-Type: application/json"`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
} 