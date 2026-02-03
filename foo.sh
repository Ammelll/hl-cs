for repo in iTunes-Demo flag_challenge curve-rush p5-bio-sim blank-starter JS-21-30 ; do 
    git clone "https://github.com/ammelll/$repo.git" temp-repo
    mkdir "$repo"
    cp -r temp-repo/* "$repo"/
    rm -rf temp-repo
done