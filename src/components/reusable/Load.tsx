import { useSelector } from "react-redux";
import Spinner from "react-spinner-material";
import { RootState } from "../../reduxstore/store";
import { LoadCont } from "./LoadStyle";
function Load() {
  const quesTion = useSelector((state: RootState) => state.quesTion);
  const userRigister = useSelector((state: RootState) => state.userRigister);
  const userSign = useSelector((state: RootState) => state.userSign);
  const { quesload } = quesTion;
  const { loadin } = userSign;
  const { loadup } = userRigister;
  return quesload || loadin || loadup ? (
    <LoadCont>
      <Spinner
        radius={80}
        color={"purpel"}
        stroke={2}
        visible={quesload || loadin || loadup}
        style={{ zIndex: 999 }}
      />
    </LoadCont>
  ) : (
    <></>
  );
}

export default Load;
