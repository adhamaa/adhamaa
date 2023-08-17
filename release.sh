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

        echo "Version release success!"
    elif [ $? == 1 ]; then
        echo "Version release failed"
    fi
    ;;

esac

echo " "
echo "Continue to merge?"
echo "1-yes"
echo "2-exit"
read strUser2

case $strUser2 in
1)
    gh pr ls
    intMerge=$(gh pr ls | tail -n 1 | awk '{print $1}' | tr -d -c 0-9)
    gh pr merge $intMerge
    #error checking
    if [ $? == 0 ]; then
        echo "Merge success"
    elif [ $? == 1 ]; then
        echo "Merge failed"
    fi
    ;;

2)
    exit
    ;;

esac

echo " "
echo "Continue to merge?"
ech
