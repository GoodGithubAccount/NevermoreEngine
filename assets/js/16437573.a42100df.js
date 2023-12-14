"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[99747],{60158:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Constructs a new ObservableMapSet","params":[],"returns":[{"desc":"","lua_type":"ObservableMapSet<TKey, TValue>"}],"function_type":"static","source":{"line":27,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"Push","desc":"Adds an entry with a dynamic key. This is great for caching things\\nthat need to be looked up by key.\\n\\n:::tip\\nIf `observeKey` emits nil then the value will be excluded from the map.\\n:::","params":[{"name":"observeKey","desc":"","lua_type":"Observable<TKey> | TKey"},{"name":"entry","desc":"","lua_type":"TValue"}],"returns":[{"desc":"Cleanup object that will remove the entry","lua_type":"MaidTask"}],"function_type":"method","source":{"line":66,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"Add","desc":"Adds an entry with a dynamic key. This is great for caching things\\nthat need to be looked up by key.\\n\\nThis code is legacy code since our argument order isn\'t intuitive\\n\\n:::tip\\nIf `observeKey` emits nil then the value will be excluded from the map.\\n:::","params":[{"name":"entry","desc":"","lua_type":"TValue"},{"name":"observeKey","desc":"","lua_type":"Observable<TKey> | TKey"}],"returns":[{"desc":"Cleanup object that will remove the entry","lua_type":"MaidTask"}],"function_type":"method","source":{"line":120,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"GetKeyList","desc":"Gets a list of all keys.","params":[],"returns":[{"desc":"","lua_type":"{ TKey }"}],"function_type":"method","source":{"line":134,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"ObserveKeyList","desc":"Observes the list of all keys.","params":[],"returns":[{"desc":"","lua_type":"Observable<{ TKey }>"}],"function_type":"method","source":{"line":146,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"GetSetCount","desc":"Gets how many sets exist","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":180,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"ObserveSetCount","desc":"Observes how many sets exist","params":[],"returns":[{"desc":"","lua_type":"Observable<number>"}],"function_type":"method","source":{"line":188,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"ObserveItemsForKeyBrio","desc":"Observes all items for the given key","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"Observable<Brio<TValue>>"}],"function_type":"method","source":{"line":197,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"GetFirstItemForKey","desc":"Gets the first item for the given key","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"TValue"}],"function_type":"method","source":{"line":239,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"GetListForKey","desc":"Gets a list for a given key","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"{ TValue }"}],"function_type":"method","source":{"line":255,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"GetObservableSetForKey","desc":"Gets the observable set for the given key","params":[{"name":"key","desc":"","lua_type":"TKey"}],"returns":[{"desc":"","lua_type":"ObservableSet<TValue>"}],"function_type":"method","source":{"line":271,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"Destroy","desc":"Cleans up the ObservableMapSet and sets the metatable to nil.","params":[],"returns":[],"function_type":"method","source":{"line":390,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}}],"properties":[{"name":"SetAdded","desc":"Fires when an item is added","lua_type":"Signal<TKey>","readonly":true,"source":{"line":39,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}},{"name":"SetRemoved","desc":"Fires when an item is removed","lua_type":"Signal<TKey>","readonly":true,"source":{"line":47,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}}],"types":[],"name":"ObservableMapSet","desc":"Holds a map of sets. That is, for a given key, a set of all valid entries. This is great\\nfor looking up something that may have duplicate keys, like configurations or other things.","source":{"line":7,"path":"src/observablecollection/src/Shared/ObservableMapSet.lua"}}')}}]);