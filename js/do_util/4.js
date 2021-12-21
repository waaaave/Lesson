// throw 站到理他最近的一层捕获 吧右侧色交给log
try {
  {
    throw new Error('some error')
  }
} catch (e) {
  console.error(e.message);
}