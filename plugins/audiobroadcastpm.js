
/* Copyright (C) 2022 souravkl11.
Licensed under the  GPL-3.0 License;
you may not change the credit or use this file except in compliance with the License.
PM Broadcast audio - souravkl11
*/

const _0x8c8ede=_0xba3b;function _0x2a03(){const _0x4499c9=['addCommand','axios','1265124EaTDfi','raganork.opus','map','delete','arraybuffer','reply','quotedMessage','716aulPyu','groupMetadata','reply_message','opus','participants','client','148620vFSrtk','JID','SKV','sendMessage','2yOeMvU','child_process','219991ZjzmRn','readFileSync','7nddnwf','from','928728JRlPsi','@adiwajshing/baileys','10qeefEy','save','SKDR','audio','get','2074878TabEVU','THIS\x20IS\x20NEW?','4117102KnJArK','../events','jid','LOGOSK','format','417NCAiDn','mp3','cwebp-bin'];_0x2a03=function(){return _0x4499c9;};return _0x2a03();}(function(_0x5009c9,_0x1e8f29){const _0x2387d5=_0xba3b,_0x15afa4=_0x5009c9();while(!![]){try{const _0x52227d=-parseInt(_0x2387d5(0x151))/0x1*(-parseInt(_0x2387d5(0x179))/0x2)+parseInt(_0x2387d5(0x163))/0x3*(-parseInt(_0x2387d5(0x16f))/0x4)+-parseInt(_0x2387d5(0x175))/0x5+parseInt(_0x2387d5(0x168))/0x6*(parseInt(_0x2387d5(0x153))/0x7)+-parseInt(_0x2387d5(0x155))/0x8+parseInt(_0x2387d5(0x15c))/0x9+-parseInt(_0x2387d5(0x157))/0xa*(parseInt(_0x2387d5(0x15e))/0xb);if(_0x52227d===_0x1e8f29)break;else _0x15afa4['push'](_0x15afa4['shift']());}catch(_0x36f384){_0x15afa4['push'](_0x15afa4['shift']());}}}(_0x2a03,0x1c6b9));const Raganork=require(_0x8c8ede(0x15f)),{MessageType,Mimetype}=require(_0x8c8ede(0x156)),fs=require('fs'),ffmpeg=require('fluent-ffmpeg'),{execFile}=require(_0x8c8ede(0x17a)),axios=require(_0x8c8ede(0x167)),cwebp=require(_0x8c8ede(0x165)),Config=require('../config');function _0xba3b(_0x292db1,_0x490368){const _0x2a03dd=_0x2a03();return _0xba3b=function(_0xba3bab,_0x61373b){_0xba3bab=_0xba3bab-0x151;let _0x1f6826=_0x2a03dd[_0xba3bab];return _0x1f6826;},_0xba3b(_0x292db1,_0x490368);}Raganork[_0x8c8ede(0x166)]({'pattern':'pmaudio\x20?(.*)','fromMe':!![],'desc':'Forwards\x20replied\x20audio\x20as\x20voice\x20note\x20with\x20verified\x20info\x20as\x20broadcast\x20to\x20all\x20participants'},async(_0x28d0e4,_0x4b5c04)=>{const _0xcdcaed=_0x8c8ede;if(_0x28d0e4['reply_message']===![]);if(!_0x28d0e4[_0xcdcaed(0x171)])return await _0x28d0e4[_0xcdcaed(0x174)]['sendMessage'](_0x28d0e4[_0xcdcaed(0x160)],'```Reply\x20to\x20an\x20audio```',MessageType['text']);var _0x5386a4=await axios[_0xcdcaed(0x15b)](Config[_0xcdcaed(0x161)],{'responseType':_0xcdcaed(0x16c)}),_0x2046d0=await _0x28d0e4[_0xcdcaed(0x174)][_0xcdcaed(0x170)](_0x28d0e4[_0xcdcaed(0x160)]),_0x5000a9=await _0x28d0e4[_0xcdcaed(0x16d)]('```Broadcasting\x20audio\x20with\x20info...```'),_0x350f7f=await _0x28d0e4['client']['downloadAndSaveMediaMessage']({'key':{'remoteJid':_0x28d0e4['reply_message'][_0xcdcaed(0x160)],'id':_0x28d0e4[_0xcdcaed(0x171)]['id']},'message':_0x28d0e4[_0xcdcaed(0x171)]['data'][_0xcdcaed(0x16e)]});let _0x52cc8e=_0x4b5c04[0x1];ffmpeg(_0x350f7f)[_0xcdcaed(0x162)](_0xcdcaed(0x172))[_0xcdcaed(0x158)](_0xcdcaed(0x169))['on']('end',async()=>{const _0x34bb96=_0xcdcaed;_0x2046d0=await _0x28d0e4[_0x34bb96(0x174)][_0x34bb96(0x170)](_0x28d0e4[_0x34bb96(0x160)]);var _0x3aae30=[];mesaj='',_0x2046d0[_0x34bb96(0x173)][_0x34bb96(0x16a)](async _0x105210=>{const _0x114ac5=_0x34bb96;await _0x28d0e4[_0x114ac5(0x174)][_0x114ac5(0x178)](_0x105210['jid'],fs[_0x114ac5(0x152)]('raganork.opus'),MessageType[_0x114ac5(0x15a)],{'mimetype':Mimetype[_0x114ac5(0x164)],'duration':Config[_0x114ac5(0x159)],'contextInfo':{'forwardingScore':0x3e8,'isForwarded':!![]},'quoted':{'key':{'participant':Config[_0x114ac5(0x176)]},'message':{'orderMessage':{'itemCount':Config[_0x114ac5(0x159)],'status':0x1,'surface':0x1,'message':Config[_0x114ac5(0x177)],'orderTitle':_0x114ac5(0x15d),'thumbnail':Buffer[_0x114ac5(0x154)](_0x5386a4['data']),'sellerJid':Config[_0x114ac5(0x176)]}}},'ptt':!![]}),await _0x5000a9[_0x114ac5(0x16b)]();});});});
