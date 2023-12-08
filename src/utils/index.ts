import './createDatasetFolder'
import create from './createDataset';
import { NCConnect  } from '../interfaces/NCConnect'
import { DsGetCoordOffset } from "../interfaces/DsGetCoordOffset";
import { DsGetCoordOffsetBatch } from "../interfaces/DsGetCoordOffsetBatch";
import { GetNCPLC } from "../interfaces/GetNCPLC";
import { DsGetWorkPieceExt } from '../interfaces/DsGetWorkPieceExt';
import { DsGetWorkPieceG92 } from '../interfaces/DsGetWorkPieceG92';
import { DsSetCoordOffset } from '../interfaces/DsSetCoordOffset';
import { DsSetWorkPieceExt } from '../interfaces/DsSetWorkPieceExt';
import { DsGetAxisName } from '../interfaces/DsGetAxisName';
import { DsGetAxisNameDsp } from '../interfaces/DsGetAxisNameDsp';
import { DsGetLang } from '../interfaces/DsGetLang';
import {DsGetNAxis} from '../interfaces/DsGetNAxis';
import {DsGetPLCv} from '../interfaces/DsGetPLCv';
import {DsGetWMCurrent} from '../interfaces/DsGetWMCurrent';
import {DsGetWMMax} from '../interfaces/DsGetWMMax';
import {DsIsNoSrv} from '../interfaces/DsIsNoSrv';
import {DsIsRunning} from '../interfaces/DsIsRunning';
import {DsIsStart} from '../interfaces/DsIsStart';
import {DsSetLang} from '../interfaces/DsSetLang';
import {DsSetWMCurrent} from '../interfaces/DsSetWMCurrent';
import {DsSetWMMax} from '../interfaces/DsSetWMMax';

create<NCConnect>("NCConnect.json", { ip: "127.0.0.1", return: 0});
create<GetNCPLC>("GetNCPLC.json", { type: "XUAA4", no: 0, v: false, return: 0});
create<DsGetCoordOffsetBatch>("DsGetCoordOffsetBatch.json", { gn: 7, oset: [1, 2, 3, 4, 5, 6, 7], axisFlag: 0, return: 0 })
create<DsGetCoordOffset>("DsGetCoordOffset.json", { gn: 7, oset: [1.11, 2.2, 3.3], axisFlag: 0, return: 0 });
create<DsGetWorkPieceExt>("DsGetWrokPieceExt.json", { Ost: [1, 2, 3], axisFlag: 3, return: 0 });
create<DsGetWorkPieceG92>("DsGetWorkPieceG92.json", { Ost: [1, 2, 3], axis: 3, return: 0 });
create<DsSetCoordOffset>("DsSetCoordOffset.json", { gn: 7, oset: 0, axisFlag: 3, return: 0 });
create<DsSetWorkPieceExt>("DsSetWorkPieceExt.json", { Ost: [1, 2, 3], axisFlag: 3, return: 0 });
create<DsGetAxisName>("DsGetAxisName.json", { n: 1, name: "x", return: 0 });
create<DsGetAxisNameDsp>("DsGetAxisNameDsp.json", { n: 1, name: "x", return: 0 });

create<DsGetLang>("DsGetLang.json", { lang: 15, return: 0 });
create<DsGetNAxis>("DsGetNAxis.json", { n: 1, return: 0 });
create<DsGetPLCv>("DsGetPLCv.json", { plcv: "XXUA04", return: 0 });
create<DsGetWMCurrent>("DsGetWMCurrent.json", { n: 1, return: 0 });
create<DsGetWMMax>("DsGetWMMax.json", { n: 1, return: 0 });
create<DsIsNoSrv>("DsIsNoSrv.json", { n: 1, isNoSrv: true, return: 0 });
create<DsIsRunning>("DsIsRunning.json", { r: true, return: 0 });
create<DsIsStart>("DsIsStart.json", { r: 1, return: 0 });
create<DsSetLang>("DsSetLang.json", { lang: 15, return: 0 });
create<DsSetWMCurrent>("DsSetWMCurrent.json", { n: 1,  return: 0 });
create<DsSetWMMax>("DsSetWMMax.json", { n: 1, return: 0 });

export {}