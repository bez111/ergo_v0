import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function OpenAPISpecPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/docs/developers/infrastructure/node/configuration"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Configuration
          </Link>
          <h1 className="text-4xl font-bold text-white mb-2">Ergo Node API v5.0.15</h1>
          <p className="text-gray-300">API documentation for Ergo Node with code samples and examples</p>
        </div>

        {/* Getting Started Alert */}
        <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-300 mb-2">Getting Started!</h2>
          <p className="text-gray-300">
            API docs for Ergo Node. Scroll down for code samples, example requests and responses
          </p>
        </div>

        {/* Base URLs */}
        <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Base URLs</h2>
          <div className="space-y-2">
            <a 
              href="http://213.239.193.208:9053" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              http://213.239.193.208:9053
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Authentication */}
        <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Authentication</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-blue-300 mb-2">API Key (ApiKeyAuth)</h3>
              <div className="bg-slate-700/50 rounded p-4">
                <p className="text-gray-300">
                  <strong>Parameter Name:</strong> api_key, <strong>in:</strong> header
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* UTXO Section */}
        <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">UTXO</h2>
          
          {/* getSnapshotsInfo Method */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-blue-300 mb-4">getSnapshotsInfo</h3>
            
            <div className="mb-4">
              <h4 className="text-lg font-medium text-white mb-2">Code samples</h4>
            </div>

            {/* Shell */}
            <div className="mb-6">
              <h5 className="text-md font-medium text-gray-300 mb-2">Shell</h5>
              <div className="bg-slate-900/80 border border-slate-600 rounded p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
{`## You can also use wget
curl -X DEFAULT /utxo/getSnapshotsInfo`}
                </pre>
              </div>
            </div>

            {/* HTTP */}
            <div className="mb-6">
              <h5 className="text-md font-medium text-gray-300 mb-2">HTTP</h5>
              <div className="bg-slate-900/80 border border-slate-600 rounded p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
{`DEFAULT /utxo/getSnapshotsInfo HTTP/1.1`}
                </pre>
              </div>
            </div>

            {/* JavaScript */}
            <div className="mb-6">
              <h5 className="text-md font-medium text-gray-300 mb-2">JavaScript</h5>
              <div className="bg-slate-900/80 border border-slate-600 rounded p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
{`fetch('/utxo/getSnapshotsInfo',
{
  method: 'DEFAULT'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});`}
                </pre>
              </div>
            </div>

            {/* Ruby */}
            <div className="mb-6">
              <h5 className="text-md font-medium text-gray-300 mb-2">Ruby</h5>
              <div className="bg-slate-900/80 border border-slate-600 rounded p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
{`require 'rest-client'
require 'json'

result = RestClient.default '/utxo/getSnapshotsInfo',
  params: {
  }

p JSON.parse(result)`}
                </pre>
              </div>
            </div>

            {/* Python */}
            <div className="mb-6">
              <h5 className="text-md font-medium text-gray-300 mb-2">Python</h5>
              <div className="bg-slate-900/80 border border-slate-600 rounded p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
{`import requests

r = requests.default('/utxo/getSnapshotsInfo')

print(r.json())`}
                </pre>
              </div>
            </div>

            {/* PHP */}
            <div className="mb-6">
              <h5 className="text-md font-medium text-gray-300 mb-2">PHP</h5>
              <div className="bg-slate-900/80 border border-slate-600 rounded p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
{`<?php

require 'vendor/autoload.php';

$client = new \\GuzzleHttp\\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DEFAULT','/utxo/getSnapshotsInfo', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\\GuzzleHttp\\Exception\\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...`}
                </pre>
              </div>
            </div>

            {/* Java */}
            <div className="mb-6">
              <h5 className="text-md font-medium text-gray-300 mb-2">Java</h5>
              <div className="bg-slate-900/80 border border-slate-600 rounded p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
{`URL obj = new URL("/utxo/getSnapshotsInfo");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DEFAULT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());`}
                </pre>
              </div>
            </div>

            {/* Go */}
            <div className="mb-6">
              <h5 className="text-md font-medium text-gray-300 mb-2">Go</h5>
              <div className="bg-slate-900/80 border border-slate-600 rounded p-4">
                <pre className="text-sm text-green-400 overflow-x-auto">
{`package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DEFAULT", "/utxo/getSnapshotsInfo", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}`}
                </pre>
              </div>
            </div>

            {/* Endpoint */}
            <div className="mb-4">
              <h5 className="text-md font-medium text-gray-300 mb-2">Endpoint</h5>
              <div className="bg-slate-900/80 border border-slate-600 rounded p-4">
                <code className="text-sm text-blue-400">DEFAULT /utxo/getSnapshotsInfo</code>
              </div>
            </div>

            {/* Responses */}
            <div className="mb-4">
              <h5 className="text-md font-medium text-gray-300 mb-2">Responses</h5>
              <div className="bg-slate-900/80 border border-slate-600 rounded p-4">
                <table className="w-full text-sm text-gray-300">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-2">Status</th>
                      <th className="text-left py-2">Meaning</th>
                      <th className="text-left py-2">Description</th>
                      <th className="text-left py-2">Schema</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-2">-</td>
                      <td className="py-2">-</td>
                      <td className="py-2">-</td>
                      <td className="py-2">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Success Note */}
            <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4">
              <p className="text-green-300 text-sm">
                This operation does not require authentication
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 