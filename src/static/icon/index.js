/* svg 聚合 */
const requireContext = require.context('./', true, /(.*?)\.svg$/);
requireContext.keys().map(requireContext);
