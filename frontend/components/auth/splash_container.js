import { connect } from "react-redux";
import Splash from "./splash";
import { signup, clearErrors } from "../../actions/session_actions";

const msp = (state, ownProps) => ({
    errors: state.errors,
    ownProps
})

const mdp = (dispatch, ownProps) => ({
    signupUser: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    ownProps
})

export default connect(msp, mdp)(Splash);