import { connect } from "react-redux"
import LoginForm from "./login";
import { login } from "../../actions/session_actions";

const msp = (state, ownProps) => ({
    errors: state.errors,
    ownProps
})

const mdp = (dispatch, ownProps) => ({
    loginUser: user => login(user),
    ownProps
})

export default connect(msp, mdp)(LoginForm);