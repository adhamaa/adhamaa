#!/bin/bash
#script adham

echo " "
echo " R E A L E A S E  V E R S I O N "
echo "1-release-as"
echo "2-release"
echo "ctrl-c to exit"
read strUser

case $strUser in
1)
    echo "Enter release version: "
    read strReleaseVer
    git commit --allow-empty -m "chore: release $strReleaseVer" -m "release-as: $strReleaseVer"

    #error checking
    if [ $? == 0 ]; then
        echo "Version release success! as v$strReleaseVer"
    elif [ $? == 1 ]; then
        echo "Version release failed"
    fi
    ;;

2)
    git commit --allow-empty -m "chore: release"

    #error checking
    if [ $? == 0 ]; then
        # get value from package.json
        strReleaseVer=$(node -p -e "require('./package.json').version")

        echo "Version v$strReleaseVer release success!"
    elif [ $? == 1 ]; then
        echo "Version release failed"
    fi
    ;;

esac
