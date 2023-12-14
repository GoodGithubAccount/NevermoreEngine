"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9227],{45689:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"Attribute data specification","params":[{"name":"prototype","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"AdorneeData<T>"}],"function_type":"static","source":{"line":30,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}},{"name":"IsData","desc":"Returns true if the data is valid data, otherwise returns false and an error.","params":[{"name":"data","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"},{"desc":"Error message","lua_type":"string"}],"function_type":"method","source":{"line":55,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}},{"name":"CreateData","desc":"Validates and creates a new data table for the data that is readonly and frozen","params":[{"name":"data","desc":"","lua_type":"T"}],"returns":[{"desc":"","lua_type":"T"}],"function_type":"method","source":{"line":65,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}},{"name":"CreatePartialData","desc":"Validates and creates a new data table that is readonly and frozen, but for partial\\ndata.\\n\\nThe partial data can just be part of the attributes.","params":[{"name":"partialData","desc":"","lua_type":"TPartial"}],"returns":[{"desc":"","lua_type":"TPartial"}],"function_type":"method","source":{"line":81,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}},{"name":"CreateAdorneeDataValue","desc":"Gets attribute table for the data","params":[{"name":"adornee","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"AdorneeDataValue"}],"function_type":"method","source":{"line":94,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}},{"name":"GetAttributes","desc":"Gets the attributes for the adornee","params":[{"name":"adornee","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"T"}],"function_type":"method","source":{"line":108,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}},{"name":"SetAttributes","desc":"Sets the attributes for the adornee","params":[{"name":"adornee","desc":"","lua_type":"Instance"},{"name":"data","desc":"","lua_type":"T"}],"returns":[],"function_type":"method","source":{"line":130,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}},{"name":"InitAttributes","desc":"Initializes the attributes for the adornee","params":[{"name":"adornee","desc":"","lua_type":"Instance"},{"name":"data","desc":"","lua_type":"T"}],"returns":[],"function_type":"method","source":{"line":150,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}},{"name":"SetPartialAttributes","desc":"Sets partial attributes on the adornee","params":[{"name":"adornee","desc":"","lua_type":"Instance"},{"name":"partialData","desc":"","lua_type":"TPartial"}],"returns":[],"function_type":"method","source":{"line":175,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}},{"name":"GetStrictTInterface","desc":"Gets a strict interface which will return true if the value is a partial interface and\\nfalse otherwise.","params":[],"returns":[{"desc":"","lua_type":"function"}],"function_type":"method","source":{"line":191,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}},{"name":"GetPartialTInterface","desc":"Gets a [t] interface which will return true if the value is a partial interface, and\\nfalse otherwise.","params":[],"returns":[{"desc":"","lua_type":"function"}],"function_type":"method","source":{"line":206,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}},{"name":"IsPartialData","desc":"Returns true if the data is valid partial data, otherwise returns false and an error.","params":[{"name":"data","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"boolean"},{"desc":"Error message","lua_type":"string"}],"function_type":"method","source":{"line":228,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}}],"properties":[],"types":[],"name":"AdorneeData","desc":"Bridges attributes and serializable data table. It\'s typical to need to define data in 3 ways.\\n\\n1. Attributes on an instance for replication\\n2. Tables for Lua configuration\\n3. Within AttributeValues for writing regular code\\n\\nProviding all 3","source":{"line":12,"path":"src/adorneedata/src/Shared/AdorneeData.lua"}}')}}]);