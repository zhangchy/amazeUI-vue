# 若指令传回值不等于0，则立即退出shell
set -e
# echo默认是换行
echo "[amazeui for Vue 2.0]Enter release version: "
read VERSION # 从键盘输入
# -p 允许在read命令行中直接指定一个提示
read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line

# =~ 表示正则match ^[Yy]$表示match
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  VERSION=$VERSION npm run dist

  # commit
  # 命令全部加入缓存区
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"

  # publish
  git push amaze refs/tags/v$VERSION
  git push amaze master
  npm publish
fi
