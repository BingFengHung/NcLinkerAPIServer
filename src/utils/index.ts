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

create<NCConnect>("NCConnect.json", { ip: "127.0.0.1", return: 0});
create<GetNCPLC>("GetNCPLC.json", { type: "XUAA4", no: 0, v: false, return: 0});
create<DsGetCoordOffsetBatch>("DsGetCoordOffsetBatch.json", { gn: 7, oset: [1, 2, 3, 4, 5, 6, 7], axisFlag: 0, return: 0 })
create<DsGetCoordOffset>("DsGetCoordOffset.json", { gn: 7, oset: [1.11, 2.2, 3.3], axisFlag: 0, return: 0 });
create<DsGetWorkPieceExt>("DsGetWrokPieceExt.json", { Ost: [1, 2, 3], axisFlag: 3, return: 0 });
create<DsGetWorkPieceG92>("DsGetWorkPieceG92.json", { Ost: [1, 2, 3], axis: 3, return: 0 });
create<DsSetCoordOffset>("DsSetCoordOffset.json", { gn: 7, oset: 0, axisFlag: 3, return: 0 });
create<DsSetWorkPieceExt>("DsSetWorkPieceExt.json", { Ost: [1, 2, 3], axisFlag: 3, return: 0 });
create<DsGetAxisName>("DsGetAxisName.json", { n: 1, name: "x", return: 0 });

export {}