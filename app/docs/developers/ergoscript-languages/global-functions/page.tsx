"use client";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Copy, Check } from "lucide-react";

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded bg-neutral-800 hover:bg-neutral-700 transition-colors"
      title="Copy code"
    >
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-400" />}
    </button>
  );
};

const CodeBlock = ({ children, language = "scala" }: { children: string; language?: string }) => (
  <div className="bg-neutral-900 border border-neutral-700 rounded-lg p-4 mb-6 relative">
    <CopyButton text={children} />
    <pre className="text-sm text-gray-300 overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

export default function GlobalFunctionsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">
        Global Functions
      </h1>
      <div className="mb-6">
        <Link
          href="/Docs/developers/ergoscript-languages"
          className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to ErgoScript Languages
        </Link>
      </div>

      <div className="space-y-6">
        <div className="text-lg text-gray-300 mb-6 max-w-2xl">
          There are a variety of global functions available for use in ErgoScript. Here, we will go through some of the most commonly used functions (besides <code className="bg-neutral-800 px-1 rounded">sigmaProp</code>). A complete reference for all global functions and types can be found in the <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">ErgoScript LangSpec</a>.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Logical Functions</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Logical functions are global functions that operate on booleans. These functions include operators such as <code className="bg-neutral-800 px-1 rounded">&amp;&amp;</code> and <code className="bg-neutral-800 px-1 rounded">||</code>, along with the following commonly used functions.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">AllOf</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The <code className="bg-neutral-800 px-1 rounded">allOf</code> function takes a collection of booleans and returns a boolean indicating whether all booleans within the collection evaluate to true. It is equivalent to inserting <code className="bg-neutral-800 px-1 rounded">&amp;&amp;</code> between each boolean in the collection.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">AnyOf</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The <code className="bg-neutral-800 px-1 rounded">anyOf</code> function takes a collection of booleans and returns a boolean indicating whether at least one boolean within the collection evaluates to true. It is equivalent to inserting <code className="bg-neutral-800 px-1 rounded">||</code> between each boolean in the collection.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">XorOf</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The <code className="bg-neutral-800 px-1 rounded">xorOf</code> function takes a collection of booleans and applies the XOR operation across the booleans within the collection. Therefore, <code className="bg-neutral-800 px-1 rounded">xorOf</code> returns true if an odd number of booleans within the collection evaluates to true, and false if an even number evaluates to true.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Zero-Knowledge Functions</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Zero-knowledge functions allow evaluating SigmaProps while preserving the zero-knowledge properties needed to verify the truth of the given SigmaProps.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">AtLeast</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The <code className="bg-neutral-800 px-1 rounded">atLeast</code> function takes an integer <code className="bg-neutral-800 px-1 rounded">k</code> and a collection of SigmaProps and returns whether at least <code className="bg-neutral-800 px-1 rounded">k</code> SigmaProps within the collection evaluate to true. All SigmaProps are evaluated with zero knowledge.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">ZKProof</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The <code className="bg-neutral-800 px-1 rounded">ZKProof</code> function takes a block of code and evaluates all operations within the code block under zero-knowledge scoping. This may be useful if some operations within your contract must be kept private. The code block must not use boolean operations to ensure zero-knowledge and must evaluate to a single root SigmaProp.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Cryptographic Functions</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Cryptographic functions are functions related to cryptography, such as hashing and calculations over <code className="bg-neutral-800 px-1 rounded">GroupElement</code> values.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Blake2b256</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          <code className="bg-neutral-800 px-1 rounded">blake2b256</code> takes a <code className="bg-neutral-800 px-1 rounded">Coll[Byte]</code> and returns a new <code className="bg-neutral-800 px-1 rounded">Coll[Byte]</code> representing the hash according to the Blake2b256 algorithm. The Blake2b256 algorithm is the main hashing algorithm used within Ergo and is also incorporated as part of the Autolykos PoW algorithm used to mine Ergo.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Sha256</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          <code className="bg-neutral-800 px-1 rounded">sha256</code> takes a <code className="bg-neutral-800 px-1 rounded">Coll[Byte]</code> and returns a new <code className="bg-neutral-800 px-1 rounded">Coll[Byte]</code> representing the hash according to the SHA256 hashing function.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">DecodePoint</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          <code className="bg-neutral-800 px-1 rounded">decodePoint</code> takes a <code className="bg-neutral-800 px-1 rounded">Coll[Byte]</code> representing a group element and converts it into the <code className="bg-neutral-800 px-1 rounded">GroupElement</code> type.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">ProveDHTuple</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          <code className="bg-neutral-800 px-1 rounded">proveDHTuple</code> takes four <code className="bg-neutral-800 px-1 rounded">GroupElement</code> values and constructs a public key represented by a SigmaProp according to the Diffie-Hellman signature protocol. This is useful for creating shared public keys in multisignature and ring signature settings.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">ProveDLog</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          <code className="bg-neutral-800 px-1 rounded">proveDlog</code> takes a <code className="bg-neutral-800 px-1 rounded">GroupElement</code> and creates a SigmaProp representing a public key based on the discrete logarithm problem.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Compile-Time Functions</h2>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Compile-time functions are not evaluated during the spending of the script; instead, these functions are used when compiling an ErgoScript contract into the native ErgoTree language. These functions take Strings (which is not an actual ErgoScript type) and convert them into an ErgoScript type during contract compilation. These values are stored directly within the contract and cannot change once the contract has been compiled.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">FromBase</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          Two functions, <code className="bg-neutral-800 px-1 rounded">fromBase64</code> and <code className="bg-neutral-800 px-1 rounded">fromBase58</code>, take strings in their respective base and convert them into a <code className="bg-neutral-800 px-1 rounded">Coll[Byte]</code> at compile time.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">PK</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The <code className="bg-neutral-800 px-1 rounded">PK</code> function takes an address string (which is a base58 encoded <code className="bg-neutral-800 px-1 rounded">GroupElement</code> with a network identifier prefix) and converts it into a <code className="bg-neutral-800 px-1 rounded">SigmaProp</code> representing a public key at compile time. This is done using many of the functions listed above.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">Deserialize</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          The <code className="bg-neutral-800 px-1 rounded">deserialize[T]</code> function takes a type parameter <code className="bg-neutral-800 px-1 rounded">T</code> and a base58 encoded string of binary data. The string value is converted into a value of ErgoScript type <code className="bg-neutral-800 px-1 rounded">T</code> at compile time.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Other Functions</h2>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">GetVar</h3>
        <div className="text-gray-300 mb-6 max-w-2xl">
          <code className="bg-neutral-800 px-1 rounded">getVar[T]</code> takes a type parameter <code className="bg-neutral-800 px-1 rounded">T</code> and an integer <code className="bg-neutral-800 px-1 rounded">tag</code>, returning a Context Variable of the given type associated with that <code className="bg-neutral-800 px-1 rounded">tag</code>. Context Variables are specific off-chain variables that can be attached to any box at the time of transaction creation. Context variables allow for robust changes to certain parameters within your contract. It is especially useful for providing generic contracts that rely on off-chain information that may change between different spending transactions.
        </div>

        <h3 className="text-xl font-bold text-cyan-400 mb-3">SubstConstants</h3>
        <div className="text-gray-300 mb-4 max-w-2xl">
          The <code className="bg-neutral-800 px-1 rounded">substConstants</code> function has the following signature:
        </div>

        <CodeBlock>{`def substConstants[T](scriptBytes: Coll[Byte],
 positions: Coll[Int], newValues: Coll[T]): Coll[Byte]`}</CodeBlock>

        <div className="text-gray-300 mb-6 max-w-2xl">
          It allows constructing another contract's proposition bytes using the given parameters. Because a contract's address is created using its contents, inputting different constants within a contract can change its address (and therefore, the contract itself). This function allows for a contract of the same "template" to be created using a new set of constants. To be used properly, one must provide a sample of the contract's proposition bytes (parameter <code className="bg-neutral-800 px-1 rounded">scriptBytes</code>), along with the <code className="bg-neutral-800 px-1 rounded">positions</code> at which certain constants of type <code className="bg-neutral-800 px-1 rounded">T</code> must be replaced with the corresponding values in the <code className="bg-neutral-800 px-1 rounded">newValues</code> parameter.
        </div>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Example: Alcohol Sale Proxy Contract</h2>

        <CodeBlock>{`{
	// ====== Alcohol Sale Proxy Contract Example ====== // 

	// Hard-coded constants expected at compile time are written in UpperCamelCase.
	
	// INPUTS:
	// license          = INPUTS(0)
	// buyerProxyInputs = INPUTS - INPUTS(0)
	//
	// OUTPUTS:
	// storeBox              = OUTPUTS(0)
	// provincialSalesTaxBox = OUTPUTS(1)
	// federalSalesTaxBox    = OUTPUTS(2)
	// buyerWalletBox        = OUTPUTS(3)
	// minerFeeBox           = OUTPUTS(4)
	//
	// (*) Note: 
	//           1. Mining fee box is always the last box in the set of OUTPUTS of a transaction,
	//              I am just showing this for clarity, but it will not be accessed in this contract.
    	//           2. If there is any that change remains in the proxy, 
	//				it is sent back to the buyer wallet.

	// Contract variables
  	val buyerPK: SigmaProp          = PK(buyerPKString)
	val buyerProxyInputs: Coll[Box] = INPUTS.filter({ (input: Box) => input.propositionBytes == SELF.propositionBytes })
	val buyerAmount: Long           = buyerProxyInputs.fold(0L)({ (input: Box, acc: Long) => acc + input.value })
	val provincialSalesTax: Long    = (AlcoholSaleAmount * ProvincialSalesTaxNum) / ProvincialSalesTaxDenom
	val federalSalesTax: Long       = (AlcoholSaleAmount * FederalSalesTaxNum) / FederalSalesTaxDenom
	val totalCost: Long             = AlcoholSaleAmount + provincialSalesTax + federalSalesTax + MinerFee
	
	// Variables associated with the buyer's license
	val license = INPUTS(0)
	val id      = license.R4[Coll[Byte]].get
	val name    = license.R5[Coll[Byte]].get
	val bDay    = license.R6[Coll[Byte]].get
	val address = license.R7[Coll[Byte]].get
	val expDate = license.R8[Coll[Byte]].get

	// Context variables needed for the proxy contract, assuming they are provided correctly
	val licenseTemplateContractBytes = getVar[Coll[Byte]](0).get

	// Substitute the constants of the license template contract bytes
	// and create the new contract bytes for the buyer's license
	val newLicenseContractBytes = {
		
		// New positions
		val newPositions_SigmaProp: Coll[Int] = Coll(0)
		val newPositions_Coll_Byte: Coll[Int] = Coll(1, 2, 3, 4, 5)
	
		// New constants
		val newConstants_SigmaProp: Coll[SigmaProp] = Coll(buyerPK)
		val newConstants_Coll_Byte: Coll[Byte] = Coll(id, name, bDay, address, expDate)

		// New contract bytes with substituted buyer PK
		val newContractBytes_SigmaProp = substConstants(licenseTemplateContractBytes, newPositions_SigmaProp, newConstants_SigmaProp)
		
		// New contract bytes with substituted buyer license information
		val newContractBytes_Coll_Byte = substConstants(newContractBytes_SigmaProp, newPositions_Coll_Byte, newConstants_Coll_Byte)
		val newContractBytes = newContractBytes_Coll_Byte
		
		newContractBytes
	}

	// Check for a valid sale
	val validSale = {

		// Check for a valid license 
		val validLicense = {
			allOf(Coll(
				BuyerLicenseContractBytes == newLicenseContractBytes,
				license.propositionBytes == newLicenseContractBytes
			))
		}

		// Check for a valid proxy amount
    		val validProxyAmount = {
	    		buyerAmount >= totalAmount
		}

		// Check for a valid store
		val validStore = {
			val storeBox = OUTPUTS(0)
			storeBox.propBytes == StoreBoxPropositionBytes
		}

		// Check for valid sales taxes
		val validSalesTaxes = {
			
			// Check for a valid provincial tax
			val validProvincialSalesTax = {
				val provincialSalesTaxBox = OUTPUTS(1)
				allOf(Coll(
					(provincialSalesTaxBox.propositionBytes == ProvincialSalesTaxPK),
					(provincialSalesTaxBox.value >= provincialSalesTax)
				))
			}

			// Check for a valid federal tax
			val validFederalSalesTax = {
				val federalSalesTaxBox = OUTPUTS(2)
				allOf(Coll(
					(federalSalesTaxBox.propositionBytes == FederalSalesTaxPK),
					(federalSalesTaxBox.value >= federalSalesTax)
				))
			}
      
      			// Demand that both sales taxes are valid
      			allOf(Coll(
        			validProvincialSalesTax,
        			validFederalSalesTax
      			))

		}

		// Check for a valid buyer wallet to return any change
		val validBuyerWallet = {
			if (buyerAmount > totalCost) {
				val buyerWalletBox = OUTPUTS(3)
				buyerWalletBox.propositionBytes == buyerPK.propBytes
			} else {
				true
			}
		}		
	
		// Demand that all the conditions are valid
		allOf(Coll(
			validLicense,
			validProxyAmount,
			validStore,
			validSalesTaxes,
			validBuyerWallet
		))

	}

	// Check for a valid refund
	val validRefund = {
		val refundWalletBox = OUTPUTS(0)
		allOf(Coll(
			(refundWalletBox.propositionBytes == buyerPK.propBytes),
			(refundWalletBox.value >= buyerAmount - MinerFee)
		))
	}

	// Obtain the appropriate sigma proposition
	sigmaProp(anyOf(Coll(
		validSale,
		validRefund
	)))

}`}</CodeBlock>

        <h2 className="text-2xl font-bold text-cyan-400 mb-4">Related Resources</h2>
        <ul className="list-disc pl-6 text-gray-300 mb-8 space-y-1">
          <li>
            <Link href="/Docs/developers/ergoscript-languages/language-description" className="text-cyan-400 hover:underline">
              ErgoScript Language Description
            </Link>
          </li>
          <li>
            <Link href="/Docs/developers/ergoscript-languages/sigma-propositions" className="text-cyan-400 hover:underline">
              Sigma Propositions
            </Link>
          </li>
          <li>
            <Link href="/Docs/developers/ergoscript-languages/accessing-boxes" className="text-cyan-400 hover:underline">
              Boxes and Registers
            </Link>
          </li>
          <li>
            <Link href="/Docs/developers/ergoscript-languages/blockchain-context" className="text-cyan-400 hover:underline">
              The Blockchain Context
            </Link>
          </li>
          <li>
            <a href="https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              ErgoScript LangSpec
            </a>
          </li>
        </ul>
      </div>
    </>
  );
} 