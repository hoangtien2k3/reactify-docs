"use strict"; (self.webpackChunkactivejdocs = self.webpackChunkactivejdocs || []).push([[6963], { 3893: (e, n, i) => { i.r(n), i.d(n, { assets: () => l, contentTitle: () => d, default: () => h, frontMatter: () => t, metadata: () => c, toc: () => o }); var s = i(5893), r = i(1151); const t = { title: "ActiveJ 5.5 - Performance improvements and bug fixes", hide_table_of_contents: !1 }, d = void 0, c = { permalink: "/blog/2023/06/15/v5.5", source: "@site/blog/2023-06-15-v5.5.md", title: "ActiveJ 5.5 - Performance improvements and bug fixes", description: "ActiveJ v5.5 was released on Jun 15,", date: "2023-06-15T00:00:00.000Z", formattedDate: "June 15, 2023", tags: [], readingTime: 1.62, hasTruncateMarker: !1, authors: [], frontMatter: { title: "ActiveJ 5.5 - Performance improvements and bug fixes", hide_table_of_contents: !1 }, unlisted: !1, nextItem: { title: "ActiveJ 5.4.3 - Simplified custom serializers", permalink: "/blog/2022/09/16/v5.4.3" } }, l = { authorsImageUrls: [] }, o = []; function a(e) { const n = { a: "a", code: "code", li: "li", p: "p", ul: "ul", ...(0, r.a)(), ...e.components }; return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsxs)(n.p, { children: ["ActiveJ v5.5 was released on Jun 15,\n2023 (", (0, s.jsx)(n.a, { href: "https://mvnrepository.com/artifact/io.activej/activej/5.5", children: "see on Maven" }), "). This release\nintroduces bug fixes, as well as some performance improvements."] }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsxs)(n.li, { children: ["General", "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: "Updated dependency versions." }), "\n", (0, s.jsx)(n.li, { children: "Changed logging levels in some components to be more appropriate." }), "\n", (0, s.jsxs)(n.li, { children: ["Added method for parsing ", (0, s.jsx)(n.code, { children: "InetSocketAddress" }), " that tries to resolve the address."] }), "\n", (0, s.jsxs)(n.li, { children: ["Made ", (0, s.jsx)(n.code, { children: "Checks" }), " enabled by default if Java's assertions are enabled."] }), "\n"] }), "\n"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "/misc/bytebuf", children: "ByteBuf" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsxs)(n.li, { children: ["Fixed UTF-8 encoding in ", (0, s.jsx)(n.code, { children: "ByteBufStrings" }), "."] }), "\n"] }), "\n"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "/async-io/eventloop", children: "Eventloop" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: "Improved performance of scheduled tasks. Minimized garbage collection required for task scheduling." }), "\n"] }), "\n"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "/inject", children: "Inject" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: "Added the ability to create bindings out of Java's constructors." }), "\n", (0, s.jsxs)(n.li, { children: ["Simplified wildcard types in ", (0, s.jsx)(n.code, { children: "KeyPattern" }), "."] }), "\n"] }), "\n"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "/rpc", children: "RPC" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsxs)(n.li, { children: ["Improved ", (0, s.jsx)(n.code, { children: "RpcClient" }), " start/stop routine."] }), "\n", (0, s.jsx)(n.li, { children: "Added launcher for multithreaded RPC server." }), "\n", (0, s.jsxs)(n.li, { children: ["Added ", (0, s.jsx)(n.code, { children: "RpcClient#withForcedShutdown" }), " method to allow shutting down the ", (0, s.jsx)(n.code, { children: "RpcClient" }), " even if there are\nactive connections."] }), "\n"] }), "\n"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "/http", children: "HTTP" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: "Fixed inspector notification about malformed data exceptions." }), "\n", (0, s.jsxs)(n.li, { children: ["Improved shutdown routine of ", (0, s.jsx)(n.code, { children: "HttpClient" }), "."] }), "\n", (0, s.jsxs)(n.li, { children: ["Added the ability to forcefully shutdown ", (0, s.jsx)(n.code, { children: "HttpClient" }), "."] }), "\n", (0, s.jsxs)(n.li, { children: ["Made response code of ", (0, s.jsx)(n.code, { children: "HttpResponse" }), " mutable."] }), "\n", (0, s.jsxs)(n.li, { children: ["Fixed multipart/form-data request parsing by considering the last ", (0, s.jsx)(n.code, { children: "CRLF" }), " optional,\nas per ", (0, s.jsx)(n.a, { href: "https://datatracker.ietf.org/doc/html/rfc2046#section-5.1.1", children: "RFC" }), "."] }), "\n"] }), "\n"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "/async-io/datastream", children: "Datastream" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsxs)(n.li, { children: ["Fixed ", (0, s.jsx)(n.code, { children: "ChannelSerializer" }), " behavior on exception occurances."] }), "\n", (0, s.jsxs)(n.li, { children: ["Added ", (0, s.jsx)(n.code, { children: "StreamLimiter" }), " class that limits number of items that pass via datastream pipeline."] }), "\n", (0, s.jsxs)(n.li, { children: ["Added ", (0, s.jsx)(n.code, { children: "StreamSkip" }), " class that omits N first items that pass via datastream pipeline."] }), "\n", (0, s.jsxs)(n.li, { children: ["Fixed stats aggregation in ", (0, s.jsx)(n.code, { children: "StreamStatsForwarder" }), "."] }), "\n"] }), "\n"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "/codegen", children: "Codegen" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: "Fixed method invocations on interfaces." }), "\n", (0, s.jsxs)(n.li, { children: ["Improved class caching in ", (0, s.jsx)(n.code, { children: "RecordScheme" }), "."] }), "\n", (0, s.jsxs)(n.li, { children: ["Compared fields in ", (0, s.jsx)(n.code, { children: "RecordScheme" }), " are now transfered to the projection."] }), "\n"] }), "\n"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "/serializer", children: "Serializer" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: "Restricted non-static inner classes to be used for serialization." }), "\n", (0, s.jsxs)(n.li, { children: ["Fixed closing routine in ", (0, s.jsx)(n.code, { children: "StreamInput" }), "."] }), "\n", (0, s.jsxs)(n.li, { children: ["Removed caching from ", (0, s.jsx)(n.code, { children: "StreamCodecs" }), "."] }), "\n", (0, s.jsxs)(n.li, { children: ["Added ", (0, s.jsx)(n.code, { children: "StreamCodecs#reference" }), " method that introduces an effective way to serialize/deserialize duplicate item\ninstances."] }), "\n"] }), "\n"] }), "\n", (0, s.jsxs)(n.li, { children: [(0, s.jsx)(n.a, { href: "/specializer", children: "Specializer" }), "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsx)(n.li, { children: "Refactored ActiveJ Specializer to perform well on conditional code." }), "\n"] }), "\n"] }), "\n", (0, s.jsxs)(n.li, { children: ["JMX", "\n", (0, s.jsxs)(n.ul, { children: ["\n", (0, s.jsxs)(n.li, { children: ["Added JMX reducers (", (0, s.jsx)(n.code, { children: "Average" }), ", ", (0, s.jsx)(n.code, { children: "Any" }), ")."] }), "\n", (0, s.jsxs)(n.li, { children: ["Added built-in support for JMX attributes/operations of ", (0, s.jsx)(n.code, { children: "Enum" }), " type."] }), "\n", (0, s.jsxs)(n.li, { children: ["Added built-in support for JMX attributes/operations of ", (0, s.jsx)(n.code, { children: "InetSocketAddress" }), " type."] }), "\n"] }), "\n"] }), "\n"] })] }) } function h(e = {}) { const { wrapper: n } = { ...(0, r.a)(), ...e.components }; return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e) } }, 1151: (e, n, i) => { i.d(n, { Z: () => c, a: () => d }); var s = i(7294); const r = {}, t = s.createContext(r); function d(e) { const n = s.useContext(t); return s.useMemo((function () { return "function" == typeof e ? e(n) : { ...n, ...e } }), [n, e]) } function c(e) { let n; return n = e.disableParentContext ? "function" == typeof e.components ? e.components(r) : e.components || r : d(e.components), s.createElement(t.Provider, { value: n }, e.children) } } }]);