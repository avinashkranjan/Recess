import React from "react";
import ImageUpload from "../../components/ImageUploader";

import { auth } from "../../firebase";

function UploadPage() {
  const [user, setUser] = React.useState({});
  React.useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);
  return (
    <div className="upload-image">
      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3 className="login__val">You need to Login to Upload</h3>
      )}
    </div>
  );
}

export default UploadPage;
