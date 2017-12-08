loadTemplate("org.kde.plasma.desktop.defaultPanel")

var desktopsArray = desktopsForActivity(currentActivity());

for (var i = 0; i < desktopsArray.length; i++) {
	desktopsArray[i].addWidget("org.kde.zerocontrol")
}
