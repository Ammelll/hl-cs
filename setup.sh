#!/bin/bash
for dir in ./*; do 
    if [ -d $dir ]; then
        echo $dir
        read name
        sed -i "$(($(cat index.html | wc -l) - 2))a\    <br><br>" index.html
        sed -i "$(($(cat index.html | wc -l) - 2))a\    <a href=\"$dir/index.html\">$name</a>" index.html
    fi
done