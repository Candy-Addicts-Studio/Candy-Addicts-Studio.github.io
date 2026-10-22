# Privacy Policy for OverlayOCR

**Last updated:** October 3, 2026

Candy Addict Studios, based in Brazil ("we", "us", or "our"), develops OverlayOCR. This policy explains
how the app handles information when you use its screen reader, text recognition,
and Chinese dictionary features.

The current app does not require an account, display advertising, or include a
separate advertising, analytics, or crash-reporting service beyond the SDK
diagnostics described below. We do not sell your captured content or use it for
advertising.

## Screen sharing and text recognition

After you start the reader and approve Android's screen-sharing prompt, OverlayOCR
receives image frames from the app you select. These frames can contain personal
or sensitive information visible in that app. Android supplies frames of the shared
app; the reader rectangle determines which part is cropped for text recognition.
The rectangle does not limit the area initially received from Android.

OverlayOCR processes these images on your device to recognize text, draw underlines,
and show dictionary definitions. Captured images, recognized text, and dictionary
queries are not uploaded to Candy Addict Studios or sent to Google for recognition.
Google states that ML Kit processes its inputs and outputs on-device. See
[ML Kit's privacy information](https://developers.google.com/ml-kit/terms).

Image frames and intermediate crops are held temporarily in memory. The app does
not save screenshots or video recordings to files. Opening a dictionary definition
pauses recognition, but screen sharing remains active and the app continues to
retain the latest frame so recognition can resume when you close the definition.

Use **Stop** in the floating menu, **Stop Reader** in the main screen, or Android's
screen-sharing controls to end capture. Ending capture closes the reader overlays.

## History, dictionary, and settings

The app keeps up to 500 recognition history entries in memory, including recognized
text, recognition timestamps, and crop dimensions. You can delete these entries
with **Clear** in History. Stopping capture does not automatically clear history;
it remains available while the app's process is alive. History is not saved to disk
and is lost when that process ends.

Dictionary lookups run against a database bundled with the app and installed in
private app storage. The app does not maintain a separate saved dictionary-search
history or send queries to an online dictionary service.

The app stores settings such as tutorial completion, whether a notification
permission request has been made, and your media-pause preference in private app
storage. These remain until you clear the app's storage or uninstall it, subject
to restoration from Android backups.

Android backup and device transfer are enabled. Depending on your device and backup
settings, stored preferences and eligible SDK data may be backed up or transferred
by Android and your backup provider. Screen images and recognition history are
not part of these backups because the app does not save them to disk. The installed
dictionary copy is excluded from backup. Backup handling is governed by your
provider's terms and settings; see [Android's backup documentation](https://developer.android.com/identity/data/autobackup).

## Google ML Kit and diagnostic information

OverlayOCR uses Google's bundled ML Kit text-recognition SDK. Although recognition
runs locally, ML Kit sends Google technical diagnostic and usage information.
Google documents this information as including device manufacturer, model and
operating-system details; app package and version; an installation identifier;
SDK versions; performance measurements; API configuration such as image format
and resolution; input and output sizes; event types; and error codes.

Google uses these metrics to operate, diagnose, maintain, and improve ML Kit and
detect misuse. ML Kit may also contact Google for updates or compatibility
information. Google states that these metrics are encrypted in transit using
HTTPS. These communications are distinct from the content of your captured images,
recognized text, and dictionary queries.

Google's handling and retention of this information are governed by its
[Privacy Policy](https://policies.google.com/privacy). Additional details are in
[ML Kit's data disclosure documentation](https://developers.google.com/ml-kit/android-data-disclosure).
OverlayOCR does not offer an in-app switch to disable ML Kit's metrics.

Google may process information outside your country under the international-data
handling arrangements described in its Privacy Policy.

## Permissions and optional media controls

- **Screen sharing:** lets the app receive frames for recognition after you approve
  Android's consent prompt.
- **Display over other apps:** lets the app show the reader, tools, and dictionary
  bubble over the app you are reading.
- **Notifications and foreground services:** support the visible, ongoing reader
  session and its stop controls. Notification permission does not let OverlayOCR
  read notifications from other apps.
- **Network access:** is included through the app's SDK dependencies for the
  communications described above; it is not used to upload screen content.

If you enable **Pause media while reading**, the app checks whether media is playing
and sends media pause/play commands through Android when definitions open or close.
It does not record audio, request microphone access, or read song titles or media
content. This feature is off by default and can be disabled in the floating menu.

## Your choices and deletion

You can stop screen sharing at any time, clear recognition history, turn off the
optional media feature, and revoke app permissions in Android Settings. Clearing
the app's storage removes its local settings and installed dictionary copy;
uninstalling removes its local app data. Manage existing backups separately through
your device or backup provider. Removing local data does not delete information
already processed by Google under its own policy.

For privacy questions or requests concerning information handled by Candy Addict
Studios, contact **[piticarrara@gmail.com](mailto:piticarrara@gmail.com)**. We cannot retrieve your captured images
or recognized-text history because the app does not send them to us.

If you contact us, we receive the contact information and message you choose to
provide. We use that information to respond to your request and keep it for as
long as needed to handle the request and meet applicable legal obligations.
Please do not include sensitive screenshots or recognized text unless needed
to explain your request.

## Privacy rights

Where applicable, Brazil's General Data Protection Law (LGPD) gives you rights
to confirm processing, access and correct personal data, request anonymization,
blocking or deletion in the circumstances provided by law, obtain information
about sharing, request portability as applicable, and withdraw consent where
processing is based on consent. You may also raise concerns with Brazil's data
protection authority, the ANPD. See the
[ANPD's explanation of these rights](https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados-1/direito-dos-titulares).

Contact us using the address above to make a request. We may need sufficient
information to verify your identity or authority to act for someone else. For
information held by Google or your backup provider, their privacy controls and
request channels also apply.

## Children and teenagers

OverlayOCR is a general-purpose reading tool and is not designed specifically
for children, although children and teenagers may use it. The app does not ask
for a user's age and does not provide a separate children's mode. The processing
described in this policy, including ML Kit diagnostics, also applies when a child
uses the app.

Parents and guardians can help children choose what to share, stop capture, and
clear local history. They may contact us about a child's privacy or to exercise
applicable rights on the child's behalf. Android's screen-sharing prompt is a
technical permission request; it does not verify parental authorization.

## Changes to this policy

We may update this policy when the app or its data practices change. We will revise
the date above and provide any additional notice or consent required for material
changes.
