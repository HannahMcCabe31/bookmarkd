async function getProfilePic() {
    const { data, error } = await supabase.storage
      .from("profile")
      .list(token.user.id + "/", {
        limit: 1,
        offset: 0,
        sortBy: { column: "created_at", order: "desc" },
      });

    if (data[0].name == ".emptyFolderPlaceholder") {
      setHasProfilePic("../../../public/default-profile-pic.jpg");
    } else if (data[0].name) {
      setHasProfilePic(CDN + token?.user?.id + "/" + data[0].name);
    } else {
      console.log(error);
    }
  }