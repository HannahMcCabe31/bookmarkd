/* */

function WelcomeUser(props) {

    return (
        <div className="mt-10 ml-4">
        <div className="w-24 h-24 mb-4 mt-3 bg-white border rounded-full"></div>
        <h1 className="ml-5 mb-3 text-3xl">
          Hello, {props.token.user.user_metadata.username}!
        </h1>
      </div>
    )
}

export default WelcomeUser