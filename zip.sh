#!/bin/bash

work_dir="$( dirname -- "$0"; )"
7z a -tzip "$work_dir/flatsome-child.zip" "$work_dir/flatsome-child"
