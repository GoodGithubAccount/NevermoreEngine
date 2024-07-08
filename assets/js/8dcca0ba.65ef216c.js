"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78675],{2464:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new Maid object\\n\\n```lua\\nlocal maid = Maid.new()\\n```","params":[],"returns":[{"desc":"","lua_type":"Maid"}],"function_type":"static","source":{"line":37,"path":"src/maid/src/Shared/Maid.lua"}},{"name":"isMaid","desc":"Returns true if the class is a maid, and false otherwise.\\n\\n```lua\\nprint(Maid.isMaid(Maid.new())) --\x3e true\\nprint(Maid.isMaid(nil)) --\x3e false\\n```","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":54,"path":"src/maid/src/Shared/Maid.lua"}},{"name":"__index","desc":"Returns Maid[key] if not part of Maid metatable\\n\\n```lua\\nlocal maid = Maid.new()\\nmaid._current = Instance.new(\\"Part\\")\\nprint(maid._current) --\x3e Part\\n\\nmaid._current = nil\\nprint(maid._current) --\x3e nil\\n```","params":[{"name":"index","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"MaidTask"}],"function_type":"method","source":{"line":73,"path":"src/maid/src/Shared/Maid.lua"}},{"name":"__newindex","desc":"Add a task to clean up. Tasks given to a maid will be cleaned when\\nmaid[index] is set to a different value.\\n\\nTask cleanup is such that if the task is an event, it is disconnected.\\nIf it is an object, it is destroyed.\\n\\n```\\nMaid[key] = (function)         Adds a task to perform\\nMaid[key] = (event connection) Manages an event connection\\nMaid[key] = (thread)           Manages a thread\\nMaid[key] = (Maid)             Maids can act as an event connection, allowing a Maid to have other maids to clean up.\\nMaid[key] = (Object)           Maids can cleanup objects with a `Destroy` method\\nMaid[key] = nil                Removes a named task.\\n```","params":[{"name":"index","desc":"","lua_type":"any"},{"name":"newTask","desc":"","lua_type":"MaidTask"}],"returns":[],"function_type":"method","source":{"line":100,"path":"src/maid/src/Shared/Maid.lua"}},{"name":"Add","desc":"Gives a task to the maid for cleanup and returns the resulting value","params":[{"name":"task","desc":"An item to clean","lua_type":"MaidTask"}],"returns":[{"desc":"","lua_type":"MaidTask"}],"function_type":"method","source":{"line":144,"path":"src/maid/src/Shared/Maid.lua"}},{"name":"GiveTask","desc":"Gives a task to the maid for cleanup, but uses an incremented number as a key.","params":[{"name":"task","desc":"An item to clean","lua_type":"MaidTask"}],"returns":[{"desc":"taskId","lua_type":"number"}],"function_type":"method","source":{"line":164,"path":"src/maid/src/Shared/Maid.lua"}},{"name":"GivePromise","desc":"Gives a promise to the maid for clean.","params":[{"name":"promise","desc":"","lua_type":"Promise<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":185,"path":"src/maid/src/Shared/Maid.lua"}},{"name":"DoCleaning","desc":"Cleans up all tasks and removes them as entries from the Maid.\\n\\n:::note\\nSignals that are already connected are always disconnected first. After that\\nany signals added during a cleaning phase will be disconnected at random times.\\n:::\\n\\n:::tip\\nDoCleaning() may be recursively invoked. This allows the you to ensure that\\ntasks or other tasks. Each task will be executed once.\\n\\nHowever, adding tasks while cleaning is not generally a good idea, as if you add a\\nfunction that adds itself, this will loop indefinitely.\\n:::","params":[],"returns":[],"function_type":"method","source":{"line":217,"path":"src/maid/src/Shared/Maid.lua"}},{"name":"Destroy","desc":"Alias for [Maid.DoCleaning()](/api/Maid#DoCleaning)","params":[],"returns":[],"function_type":"static","source":{"line":263,"path":"src/maid/src/Shared/Maid.lua"}},{"name":"new","desc":"Constructs a new Maid object\\n\\n```lua\\nlocal maid = Maid.new()\\n```","params":[],"returns":[{"desc":"","lua_type":"Maid"}],"function_type":"static","source":{"line":37,"path":"src/loader/src/Maid.lua"}},{"name":"isMaid","desc":"Returns true if the class is a maid, and false otherwise.\\n\\n```lua\\nprint(Maid.isMaid(Maid.new())) --\x3e true\\nprint(Maid.isMaid(nil)) --\x3e false\\n```","params":[{"name":"value","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"static","source":{"line":54,"path":"src/loader/src/Maid.lua"}},{"name":"__index","desc":"Returns Maid[key] if not part of Maid metatable\\n\\n```lua\\nlocal maid = Maid.new()\\nmaid._current = Instance.new(\\"Part\\")\\nprint(maid._current) --\x3e Part\\n\\nmaid._current = nil\\nprint(maid._current) --\x3e nil\\n```","params":[{"name":"index","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"MaidTask"}],"function_type":"method","source":{"line":73,"path":"src/loader/src/Maid.lua"}},{"name":"__newindex","desc":"Add a task to clean up. Tasks given to a maid will be cleaned when\\nmaid[index] is set to a different value.\\n\\nTask cleanup is such that if the task is an event, it is disconnected.\\nIf it is an object, it is destroyed.\\n\\n```\\nMaid[key] = (function)         Adds a task to perform\\nMaid[key] = (event connection) Manages an event connection\\nMaid[key] = (thread)           Manages a thread\\nMaid[key] = (Maid)             Maids can act as an event connection, allowing a Maid to have other maids to clean up.\\nMaid[key] = (Object)           Maids can cleanup objects with a `Destroy` method\\nMaid[key] = nil                Removes a named task.\\n```","params":[{"name":"index","desc":"","lua_type":"any"},{"name":"newTask","desc":"","lua_type":"MaidTask"}],"returns":[],"function_type":"method","source":{"line":100,"path":"src/loader/src/Maid.lua"}},{"name":"Add","desc":"Gives a task to the maid for cleanup and returns the resulting value","params":[{"name":"task","desc":"An item to clean","lua_type":"MaidTask"}],"returns":[{"desc":"","lua_type":"MaidTask"}],"function_type":"method","source":{"line":144,"path":"src/loader/src/Maid.lua"}},{"name":"GiveTask","desc":"Gives a task to the maid for cleanup, but uses an incremented number as a key.","params":[{"name":"task","desc":"An item to clean","lua_type":"MaidTask"}],"returns":[{"desc":"taskId","lua_type":"number"}],"function_type":"method","source":{"line":164,"path":"src/loader/src/Maid.lua"}},{"name":"GivePromise","desc":"Gives a promise to the maid for clean.","params":[{"name":"promise","desc":"","lua_type":"Promise<T>"}],"returns":[{"desc":"","lua_type":"Promise<T>"}],"function_type":"method","source":{"line":185,"path":"src/loader/src/Maid.lua"}},{"name":"DoCleaning","desc":"Cleans up all tasks and removes them as entries from the Maid.\\n\\n:::note\\nSignals that are already connected are always disconnected first. After that\\nany signals added during a cleaning phase will be disconnected at random times.\\n:::\\n\\n:::tip\\nDoCleaning() may be recursively invoked. This allows the you to ensure that\\ntasks or other tasks. Each task will be executed once.\\n\\nHowever, adding tasks while cleaning is not generally a good idea, as if you add a\\nfunction that adds itself, this will loop indefinitely.\\n:::","params":[],"returns":[],"function_type":"method","source":{"line":217,"path":"src/loader/src/Maid.lua"}},{"name":"Destroy","desc":"Alias for [Maid.DoCleaning()](/api/Maid#DoCleaning)","params":[],"returns":[],"function_type":"static","source":{"line":263,"path":"src/loader/src/Maid.lua"}}],"properties":[],"types":[],"name":"Maid","desc":"Manages the cleaning of events and other things. Useful for\\nencapsulating state and make deconstructors easy.\\n\\nSee the [Five Powerful Code Patterns talk](https://developer.roblox.com/en-us/videos/5-powerful-code-patterns-behind-top-roblox-games)\\nfor a more in-depth look at Maids in top games.\\n\\n```lua\\nlocal maid = Maid.new()\\n\\nmaid:GiveTask(function()\\n\\tprint(\\"Cleaning up\\")\\nend)\\n\\nmaid:GiveTask(workspace.ChildAdded:Connect(print))\\n\\n-- Disconnects all events, and executes all functions\\nmaid:DoCleaning()\\n```","source":{"line":23,"path":"src/maid/src/Shared/Maid.lua"}}')}}]);