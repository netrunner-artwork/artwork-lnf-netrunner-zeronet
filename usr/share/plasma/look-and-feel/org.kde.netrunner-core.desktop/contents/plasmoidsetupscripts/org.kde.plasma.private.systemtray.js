applet.currentConfigGroup = ["General"]
applet.writeConfig("extraItems","org.kde.plasma.devicenotifier,org.kde.plasma.networkmanagement,org.kde.discovernotifier,org.kde.plasma.diskquota,org.kde.plasma.clipboard,org.kde.plasma.battery,org.kde.plasma.printmanager")
applet.writeConfig("knownItems", "org.kde.plasma.networkmanagement,org.kde.plasma.bluetooth,org.kde.discovernotifier,org.kde.plasma.clipboard,org.kde.plasma.mediacontroller,org.kde.plasma.devicenotifier,org.kde.plasma.notifications,org.kde.plasma.notifications,org.kde.kdeconnect,org.kde.plasma.volume")
applet.writeConfig("hiddenItems","org.kde.plasma.clipboard")
applet.writeConfig("shownItems", "transmission,vokoscreen")
applet.reloadConfig()
