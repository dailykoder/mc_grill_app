declare global {
  interface Window {
    // Declare the property used by webpack chunk loading
    // Using 'any[]' is generally safe here as the exact structure isn't critical for type checking
    webpackChunk_N_E?: any[];
  }
}
