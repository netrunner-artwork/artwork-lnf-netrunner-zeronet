loadTemplate("org.kde.plasma.desktop.defaultPanel")

var desktopsArray = desktopsForActivity(currentActivity());

for (var i = 0; i < desktopsArray.length; i++) {
	var zerowidget = desktopsArray[i].addWidget("org.kde.zerocontrol")
	zerowidget.geometry.x = 200
	zerowidget.geometry.y = 200
	zerowidget.currentConfigGroup = '["Configuration"]["General"]'
	zerowidget.writeConfig("zeronetLocation", "/opt/zeronet/ZeroNet-master")
}
