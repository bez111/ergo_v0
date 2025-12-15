
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

export default function ConstraintsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent mb-4 leading-tight pb-1">Mobile Build Constraints for Scala/JVM Components</h1>
      <div className="mb-6">
        <Link href="/docs/developers/tooling/mobile" className="inline-flex items-center px-5 py-2 bg-cyan-500 rounded-xl font-semibold text-black hover:bg-cyan-600 transition-transform hover:scale-105">
          <ArrowLeft className="w-5 h-5 mr-2" />Back
        </Link>
      </div>
      <p className="text-lg text-gray-300 mb-8">Developing mobile applications (Android/iOS) that incorporate Scala or other JVM-based libraries (like AppKit or core Ergo components) involves navigating a complex set of build constraints and potential compatibility issues. This page outlines some key areas developers should be aware of, based on community discussions.</p>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">Key Constraint Areas</h2>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-6">1. Scala Version Compatibility</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Scala 2 vs. Scala 3:</b> Ergo's core libraries have migrated to Scala 3. Ensure your build tools (SBT, Gradle) and dependencies are compatible with the Scala version used by the Ergo libraries you depend on.</li>
        <li><b>Binary Compatibility:</b> Be mindful of potential binary incompatibilities between different Scala minor versions, especially across major releases (2.x vs. 3.x).</li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-6">2. JDK Version Requirements</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Compilation:</b> The JDK version used to compile your Scala code and dependencies matters. Ergo components often require JDK 11 or higher.</li>
        <li><b>Android Compatibility:</b> Android projects have specific JDK compatibility requirements that might differ from your desktop development environment. Ensure the JDK used by your Android build process (e.g., via Android Studio's settings or Gradle configuration) is compatible with both Android and the required JDK level for your Scala dependencies.</li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-6">3. Android SDK Levels & API Compatibility</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>minSdkVersion:</b> The minimum Android API level your app targets can restrict which Java APIs and language features are available directly.</li>
        <li><b>Desugaring:</b> To use newer Java language features (from JDK 8+) on older Android versions, Android's build process uses "desugaring". This transforms bytecode to be compatible with older Android runtimes. Desugaring needs to be enabled and configured correctly in your <code>build.gradle</code> file.<br/><a href="https://developer.android.com/studio/write/java8-support#library-desugaring" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Android Java 8+ API Desugaring</a></li>
        <li><b>Scala Standard Library:</b> The Scala standard library itself might use Java APIs that require desugaring for compatibility with your <code>minSdkVersion</code>.</li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-6">4. Code Shrinking & Obfuscation (R8/ProGuard)</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>R8:</b> Android's default code shrinker and obfuscator (replacing ProGuard). R8 removes unused code and renames classes/methods to reduce app size.</li>
        <li><b>Configuration (<code>proguard-rules.pro</code>):</b> R8 requires careful configuration, especially when dealing with reflection, serialization, or JNI (Java Native Interface) used by Scala or dependent libraries. You often need to add <code>-keep</code> rules in <code>proguard-rules.pro</code> to prevent R8 from removing or renaming essential classes or methods that are accessed indirectly (e.g., via reflection). Incorrect configuration can lead to runtime crashes (<code>ClassNotFoundException</code>, <code>NoSuchMethodError</code>).</li>
        <li><b>Scala Reflection:</b> Scala's reflection capabilities can be particularly sensitive to R8 optimization. Extensive <code>-keep</code> rules might be necessary if your code or dependencies rely heavily on reflection.</li>
      </ul>
      <h3 className="text-xl font-bold text-orange-400 mb-2 mt-6">5. iOS Build Limitations (JVM on iOS)</h3>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>No Native JVM:</b> iOS does not have a native Java Virtual Machine. Running Scala/JVM code directly on iOS typically requires cross-compilation or specific frameworks:</li>
        <ul className="list-disc pl-10 text-gray-300 mb-2 space-y-1">
          <li><b>Scala Native:</b> Compiles Scala code to native binaries using LLVM. Compatibility with all JVM libraries is not guaranteed.</li>
          <li><b>Multi-OS Engine (Deprecated):</b> Previously allowed running JVM bytecode on iOS, but is no longer actively maintained.</li>
          <li><b>Gluon SubstrateVM (GraalVM):</b> Can compile Java/Scala applications into native iOS binaries.</li>
          <li><b>Kotlin Multiplatform Mobile (KMM):</b> While focused on Kotlin, it provides mechanisms for sharing code (potentially including Scala via JVM interop) between Android and iOS, often compiling to native code for iOS.</li>
        </ul>
        <li><b>Sigma-Rust Bindings:</b> For core Ergo cryptographic operations, using the <a href="sigma-rust.md" className="text-cyan-400 hover:underline">iOS bindings provided by sigma-rust</a> is often the most practical approach for iOS development, avoiding the complexities of running a full JVM environment.</li>
      </ul>
      <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">General Recommendations & Resources</h2>
      <ul className="list-disc pl-6 text-gray-300 mb-4 space-y-1">
        <li><b>Start Simple:</b> Begin with a minimal setup and gradually add dependencies to isolate compatibility issues.</li>
        <li><b>Check Dependency Requirements:</b> Carefully review the documentation for the specific Ergo libraries (AppKit, sigma-rust bindings, etc.) regarding their required Scala, JDK, and Android SDK versions.</li>
        <li><b>Consult Build Logs:</b> Pay close attention to warnings and errors during the Gradle build process, especially those related to desugaring, R8, or dependency conflicts.</li>
        <li><b>Scala on Android Tutorial:</b> While potentially slightly dated depending on the specific library versions you use, the official Scala documentation provides background: <a href="https://docs.scala-lang.org/tutorials/scala-on-android.html" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Scala on Android Tutorial</a></li>
        <li><b>Community Support:</b> Mobile development with Scala/JVM can be complex. Seek help in Ergo developer community channels, providing details about your build configuration (Gradle files, SBT versions, library versions) and any error messages encountered.</li>
      </ul>
      <p className="text-gray-300 mb-4">Navigating these constraints requires careful configuration and testing. Understanding the interplay between Scala versions, JDK features, Android build tools (Gradle, R8, Desugaring), and platform limitations (especially for iOS) is key to successfully building mobile Ergo applications using JVM-based components.</p>
    </>
  );
} 