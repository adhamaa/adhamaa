#!/bin/bash
#script adham

echo " "
echo " G I T  C O M M I T "
echo "1-release-as"
echo "2-release"
echo "ctrl-c to exit"
read strUser

case $strUser in
        1) 
            echo "Enter npm config version: "
            read strNpmVer
            git commit --allow-empty -m "chore: release %npm_config_version%" -m "release-as: $strNpmVer"

            #error checking
            if [ $? == 0 ]
            then
                echo "Git commit success!"
            elif [ $? == 1 ]
            then
                echo "Git commit failed"
            fi 
            ;;

        2) 
            git commit --allow-empty -m "chore: release"

            #error checking
            if [ $? == 0 ]
            then
                echo "Git commit success!"
            elif [ $? == 1 ]
            then
                echo "Git commit failed"
            fi 
            ;;

esac