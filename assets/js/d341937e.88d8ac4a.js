"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68040],{12765:e=>{e.exports=JSON.parse('{"functions":[{"name":"SetQueryOwnershipCallback","desc":"Sets the callback which will query ownership","params":[{"name":"promiseOwnsAsset","desc":"","lua_type":"function"}],"returns":[],"function_type":"method","source":{"line":70,"path":"src/gameproductservice/src/Shared/Ownership/PlayerAssetOwnershipTracker.lua"}},{"name":"SetWriteAttributesEnabled","desc":"Sets whether attributes should be written for this asset type.","params":[{"name":"attributesEnabled","desc":"","lua_type":"boolean"}],"returns":[],"function_type":"method","source":{"line":137,"path":"src/gameproductservice/src/Shared/Ownership/PlayerAssetOwnershipTracker.lua"}},{"name":"SetOwnership","desc":"Sets the players ownership of a the asset","params":[{"name":"idOrKey","desc":"","lua_type":"number"},{"name":"ownsPass","desc":"","lua_type":"boolean"}],"returns":[],"function_type":"method","source":{"line":149,"path":"src/gameproductservice/src/Shared/Ownership/PlayerAssetOwnershipTracker.lua"}},{"name":"PromiseOwnsAsset","desc":"Promises true if the user owns the asset and false otherwise","params":[{"name":"idOrKey","desc":"","lua_type":"string | number"}],"returns":[{"desc":"","lua_type":"Promise<boolean>"}],"function_type":"method","source":{"line":172,"path":"src/gameproductservice/src/Shared/Ownership/PlayerAssetOwnershipTracker.lua"}},{"name":"ObserveOwnsAsset","desc":"Observes whether the player owns the asset or not","params":[{"name":"idOrKey","desc":"","lua_type":"number | number"}],"returns":[{"desc":"","lua_type":"Observable<boolean>"}],"function_type":"method","source":{"line":200,"path":"src/gameproductservice/src/Shared/Ownership/PlayerAssetOwnershipTracker.lua"}}],"properties":[],"types":[],"name":"PlayerAssetOwnershipTracker","desc":"This tracking is relatively complicated because we want to track both\\nownership from attributes (can be customized locally), as well as async\\ncloud services.","source":{"line":8,"path":"src/gameproductservice/src/Shared/Ownership/PlayerAssetOwnershipTracker.lua"}}')}}]);