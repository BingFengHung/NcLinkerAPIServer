import './createDatasetFolder'
import create from './createDataset';
import { NCConnect  } from '../interfaces/NCConnect'
import { DsGetCoordOffset } from "../interfaces/DsGetCoordOffset";
import { DsGetCoordOffsetBatch } from "../interfaces/DsGetCoordOffsetBatch";
import { GetNCPLC } from "../interfaces/GetNCPLC";

create<NCConnect>("NCConnect.json", { ip: "127.0.0.1", return: 0});
create<GetNCPLC>("GetNCPLC.json", { type: "XUAA4", no: 0, v: false});
create<DsGetCoordOffsetBatch>("DsGetCoordOffsetBatch.json", {
  gn: 7,
  oset: [1, 2, 3, 4, 5, 6, 7],
  axisFlag: 0
})

create<DsGetCoordOffset>("DsGetCoordOffset.json", { gn: 7, oset: 1.11, axisFlag: 0 });

export {}