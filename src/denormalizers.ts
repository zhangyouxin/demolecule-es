import { toolkit } from "@ckb-lumos/lumos";
import { DenormalizedScript } from "./denormalizersTypes";
import { Script } from './blockchain'

export function DenormalizeScript(script: Script): DenormalizedScript {
  return {
    code_hash: new toolkit.Reader(script.getCodeHash().raw()).serializeJson(),
    hash_type: script.getHashType() === 0 ? "data" : "type",
    args: new toolkit.Reader(script.getArgs().raw()).serializeJson()
  };
}