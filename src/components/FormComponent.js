import { useSelector } from "react-redux";
import { DATA, LOGIN, PASSWORD, REGISTER } from "../utilits/constants";
import { FormGroup } from "./FormGroup";

export const FormComponent = ({
  submit,
  user,
  changeData,
  type,
  title,
  toggleEditAlert,
  closeBtn = false,
}) => {
  const loader = useSelector((s) => s.load);

  return (
    <form onSubmit={submit} className="form mt-2">
      <div>
        <h1 className="t-c">
          {title} {type === PASSWORD ? "Password" : "User"}
        </h1>
      </div>

      {(type === REGISTER || type === DATA || type === LOGIN) && (
        <FormGroup
          id={"email"}
          val={user.email}
          onChangeData={changeData}
          name={"email"}
        />
      )}

      {(type === REGISTER || type === DATA) && (
        <FormGroup
          id={"name"}
          val={user.name}
          onChangeData={changeData}
          name={"name"}
        />
      )}

      {type === PASSWORD && (
        <FormGroup
          type={"password"}
          id={"oldPassword"}
          val={user.oldPassword}
          onChangeData={changeData}
          name={"oldPassword"}
        />
      )}

      {(type === PASSWORD || type === REGISTER || type === LOGIN) && (
        <FormGroup
          type={"password"}
          id={"password"}
          val={user.password}
          onChangeData={changeData}
          name={"password"}
        />
      )}

      {(type === PASSWORD || type === REGISTER) && (
        <FormGroup
          type={"password"}
          id={"confirmPassword"}
          val={user.confirmPassword}
          onChangeData={changeData}
          name={"confirmPassword"}
        />
      )}

      <div className="btn">
        {closeBtn && (
          <button
            type="button"
            disabled={loader}
            style={{ marginRight: "15px" }}
            onClick={toggleEditAlert}
          >
            Close
          </button>
        )}
        <button type="submit" disabled={loader}>
          {title}
        </button>
      </div>
    </form>
  );
};
